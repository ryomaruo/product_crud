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

const createProduct = async (product) => {
  try {
    const data = {
      name: product.name,
      model_number: product.model_number,
      price: product.price,
      stock: product.stock,
      discontinued: product.discontinued,
      description: product.description
    }
    
    const res = await axios.post('http://localhost:8080/api/products', data)
    return res.data
  } catch (error) {
    console.log(error);
    return [];
  }
}

const updateProduct = async (product) => {
  try {
    const data = {
      name: product.name,
      model_number: product.model_number,
      price: product.price,
      stock: product.stock,
      discontinued: product.discontinued,
      description: product.description,
      image_url: 'https://i.gyazo.com/57fc7fb20cc0e5669526f8524e56a5b1.jpg',
    }
    const res = await axios.put('http://localhost:8080/api/products/' + product.id, data)
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
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProducts: deleteProducts
}