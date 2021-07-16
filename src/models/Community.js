const { Model, DataTypes } = require('sequelize');

class Community extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'communities',
    })
  }

  static associate(models) {
    // this.belongsTo(models.User, { foreignKey: 'use_id', as: 'owner' });
    this.belongsToMany(models.User, { foreignKey: 'community_id', through: 'community_users', as: 'members' });
  }
}

module.exports = Community;