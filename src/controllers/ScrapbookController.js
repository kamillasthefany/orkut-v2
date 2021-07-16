const User = require('../models/User');
const Scrapbook = require('../models/Scrapbook');

module.exports = {
  async index(request, response) {

    try {
      const { user_id } = request.params;

      const user = await User.findByPk(user_id, {
        include: { association: 'scrapbook' }
      });

      return response.status(200).json(user);
    }
    catch (exc) {
      return response.status(400).json(exc);
    }
  },

  async store(request, response) {

    try {
      const { user_id } = request.params;
      const { title } = request.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return response.status(400).json({ error: 'Usuário não encontrado' });
      }

      const scrapbook = await Scrapbook.create({
        title,
        user_id,
      });

      return response.status(200).json(scrapbook);
    }
    catch (exc) {
      return response.status(400).json(exc);
    }
  }
};