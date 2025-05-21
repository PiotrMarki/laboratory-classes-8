const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { STATUS_CODE } = require("../constants/statusCode");

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};

exports.addProductToCart = async (req, res) => {
  const { productName } = req.body;
  if (!productName) {
    return res.status(400).json({ error: "No product name provided" });
  }
  const product = await Product.findByName(productName);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  await Cart.add(product);
  res.status(STATUS_CODE.OK).json({ success: true });
};
