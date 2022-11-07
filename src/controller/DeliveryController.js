const DeliveriesModel = require("../models/DeliveriesModel");
const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required(),
  product: Joi.string().required(),
  origin: Joi.string().required(),
  destiny: Joi.string().required(),
  date: Joi.date().required(),
});

const CreateDelivery = async (req, res) => {
  try {
    const { name, product, origin, destiny, date } = req.body;

    const { error } = schema.validate({
      name,
      product,
      origin,
      destiny,
      date,
    });

    if (error) {
      return res.status(502).json({
        data: null,
        error: error.details[0].message,
      });
    }

    const delivery = await DeliveriesModel.create({
      name,
      product,
      origin,
      destiny,
      date,
    });

    if (!delivery) {
      return res.status(409).json({
        data: null,
        error: "There was an error creating the delivery",
      });
    }

    return res.status(200).json({
      data: delivery,
      error: null,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

const GetAllDeliveries = async (req, res) => {
  try {
    const deliveries = await DeliveriesModel.findAll();

    if (deliveries.length == 0) {
      return res.status(409).json({
        data: null,
        error: "There are no deliveries registered",
      });
    }

    return res.status(200).json({
      data: deliveries,
      error: null,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

module.exports = {
  CreateDelivery,
  GetAllDeliveries,
};
