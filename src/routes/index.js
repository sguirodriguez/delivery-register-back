const express = require("express");
const DeliveryController = require("../controller/DeliveryController");

const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    return res.status(200).json("Online server!");
  } catch (error) {
    return res.status(500).json({ data: null, error });
  }
});

routes.post("/delivery", DeliveryController.CreateDelivery);

routes.get("/delivery", DeliveryController.GetAllDeliveries);

module.exports = routes;
