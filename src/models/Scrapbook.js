const { Model, DataTypes } = require('sequelize');

class Scrapbook extends Model {
  static init(connection) {
    super.init({
      title: DataTypes.STRING
    }, {
      sequelize: connection,
      tableName: 'scrapbook'
      //table name evita a pluralização
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Scrapbook;