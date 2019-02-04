import axios from 'axios'

const API_URL = 'localhost:8080'

const fetchProducts = async () => {
  try {
    const res = await axios.get('http://' + API_URL +'/api/products')
    const products = res.data
    
    return products
  } catch (error) {
    console.log(error);
    return [];
  }
};

const fetchProduct = async (id) => {
  try {
    const res = await axios.get('http://' + API_URL +'/api/products/' + id)
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
    
    await axios.post('http://' + API_URL +'/api/products', data)
  } catch (error) {
    console.log(error);
    alert('登録に失敗しました。')
    throw new Error('終了します')
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
    const res = await axios.put('http://' + API_URL +'/api/products/' + product.id, data)
    return res.data
  } catch (error) {
    console.log(error);
    alert('更新に失敗しました。')
    throw new Error('exit')
  }
};

const deleteProducts = async (id, products) => {
  try {
    const res = await axios.delete('http://' + API_URL +'/api/products/' + id)
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