const { Model, DataTypes } = require("sequelize");

class Deliveries extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        product: DataTypes.STRING,
        origin: DataTypes.STRING,
        destiny: DataTypes.STRING,
        date: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Deliveries;
