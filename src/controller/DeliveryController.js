const DeliveriesModel = require("../models/DeliveriesModel");

const CreateDelivery = async (req, res) => {
  const { name, product, origin, destiny, date } = req.body;

  console.log("ta vindo", name, origin);
  // const delivery = await DeliveriesModel.create({
  //   name,
  //   product,
  //   origin,
  //   destiny,
  //   date,
  // });

  return res.json({
    teste: "deu bom",
  });
};

module.exports = {
  CreateDelivery,
};
