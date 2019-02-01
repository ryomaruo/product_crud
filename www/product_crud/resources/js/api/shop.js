import axios from 'axios'

const fetchProducts = async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/products')
    const products = res.data
    return products
  } catch (error) {
    const {
      status,
      statusText
    } = error.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
    return [];
  }
};

const deleteProducts = async () => {
  // TODO: delete api実装
  console.log('api deleteProducts');
  return true
}


export default {
  fetchProducts: fetchProducts,
  deleteProducts: deleteProducts
}