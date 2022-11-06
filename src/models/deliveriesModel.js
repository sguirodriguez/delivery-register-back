const deliveriesModel = (sequelize, DataTypes) => {
  const deliveries = sequelize.define(
    "deliveries",
    {
      name: {
        type: DataTypes.STRING,
      },
      product: {
        type: DataTypes.STRING,
      },
      origin: {
        type: DataTypes.STRING,
      },
      destiny: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "deliveries",
    }
  );
  return deliveries;
};

module.exports = deliveriesModel;
