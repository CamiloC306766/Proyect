const productModel = require('../models/productos.model');

// Crear un nuevo producto
const createProduct = async (productData) => {
  const newProduct = await productModel.create(productData); 
  return newProduct;
};

// Obtener todos los productos
const getAllProducts = async () => {
  const products = await productModel.findAll(); 
  return products;
};

// Obtener un producto por ID
const getProductById = async (id) => {
  const product = await productModel.findByPk(id);
  return product;
};

// Actualizar un producto
const updateProduct = async (id, productData) => {
  const product = await productModel.findByPk(id);
  if (product) {
    await product.update(productData);
    return product;
  }
  return null;
};

// Eliminar un producto
const deleteProduct = async (id) => {
  const product = await productModel.findByPk(id);
  if (product) {
    await product.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
