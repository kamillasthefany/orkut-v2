const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize: connection,
      tableName: 'users'
      //table name evita a pluralização
    })
  }

  static associate(models) {
    this.hasMany(models.Scrapbook, { foreignKey: 'user_id', as: 'scrapbook' });
    this.belongsToMany(models.Community, { foreignKey: 'user_id', through: 'community_users', as: 'communities' });
  }
}

module.exports = User;