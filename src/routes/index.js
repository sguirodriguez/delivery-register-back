const express = require("express");
const DeliveryController = require("../controller/DeliveryController");

const routes = express.Router();

routes.post("/", DeliveryController.CreateDelivery);

routes.get("/", DeliveryController.GetAllDeliveries);

module.exports = routes;
