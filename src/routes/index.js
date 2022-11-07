const express = require("express");
const DeliveryController = require("../controller/DeliveryController");

const routes = express.Router();

routes.post("/delivery", DeliveryController.CreateDelivery);

routes.get("/delivery", DeliveryController.GetAllDeliveries);

module.exports = routes;
