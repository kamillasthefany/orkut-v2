const User = require('../models/User');
const Community = require('../models/Community');

module.exports = {
  async index(request, response) {
    try {
      const { user_id } = request.params;

      const user = await User.findByPk(user_id, {
        include: {
          association: 'communities'
        }
      })

      return response.status(200).json(user.communities);
    }
    catch (exc) {
      return response.status(400).json(user.communities);
    }
  },

  async store(request, response) {
    try {

      const { user_id } = request.params;
      const { name } = request.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return response.status(400).json({ error: 'Usuário não encontrado' });
      }

      const [community] = await Community.findOrCreate({
        where: { name }
      });

      await user.addCommunity(community);

      return response.status(200).json(community);
    }
    catch (exc) {
      return response.status(400).json(exc);
    }
  },

  async delete(request, response) {
    const { user_id } = request.params;
    const { name } = request.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return response.status(400).json({ error: 'Usuário não encontrado' });
    }

    const community = await Community.findOne({
      where: { name }
    });

    await user.removeCommunity(community);

    return response.json();
  }
};