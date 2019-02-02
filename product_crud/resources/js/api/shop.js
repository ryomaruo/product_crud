import axios from 'axios'

const fetchProducts = async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/products')
    const products = res.data
    return products
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchProduct = async (id) => {
  try {
    const res = await axios.get('http://localhost:8080/api/products/' + id)
    const product = res.data
    return product
  } catch (error) {
    console.log(error);
    return [];
  }
};

const updateProduct = async (product) => {
  try {
    const res = await axios.put('http://localhost:8080/api/products/' + product.id, product)
    return res.data
  } catch (error) {
    console.log(error);
    return [];
  }
};

const deleteProducts = async (id, products) => {
  try {
    const res = await axios.delete('http://localhost:8080/api/products/' + id)
    
    return res.data;
  } catch (error) {
    console.log(error);
    return products;
  }
}


export default {
  fetchProducts: fetchProducts,
  fetchProduct: fetchProduct,
  updateProduct: updateProduct,
  deleteProducts: deleteProducts
}