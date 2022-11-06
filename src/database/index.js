const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const DeliveriesModel = require("../models/DeliveriesModel");

const connection = new Sequelize(dbConfig);

DeliveriesModel.init(connection);

module.exports = connection;
