const express = require("express");
const DeliveryController = require("../controller/DeliveryController");

const routes = express.Router();

routes.post("/", DeliveryController.CreateDelivery);

module.exports = routes;
