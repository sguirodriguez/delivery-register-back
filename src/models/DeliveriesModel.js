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
        createdAt: {
          type: DataTypes.DATE,
          field: "created_at",
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: "updated_at",
        },
      },
      {
        sequelize,
        timestamps: true,
      }
    );
  }
}

module.exports = Deliveries;
