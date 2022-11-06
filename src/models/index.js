const sequelize = require("../database");
const Sequelize = require("sequelize");

const deliveriesModel = require("./deliveriesModel");

const DeliveriesModel = deliveriesModel(sequelize, Sequelize.DataTypes);

const db = {
  DeliveriesModel,
  sequelize,
};

module.exports = db;
