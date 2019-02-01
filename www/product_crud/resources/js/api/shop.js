import axios from 'axios'

const _products = [
  {
    'id': 1,
    'name': 'iPad 4 Mini（台湾製）',
    'model_number': '',
    'price': 12345,
    'stock': 3,
    'discontinued': 0,
    'description': 'this is description.this is description.this is description.this is description.',
    'image_url': 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg',
  },
  {
    'id': 2,
    'name': 'iPhone 5（台湾製）',
    'model_number': '',
    'price': 6789,
    'stock': 2,
    'discontinued': 0,
    'description': 'this is description.this is description.this is description.this is description.',
    'image_url': 'https://i.gyazo.com/.jpg',
  },
  {
    'id': 3,
    'name': 'iPhone XR（台湾製）',
    'model_number': '',
    'price': 123456789,
    'stock': 1,
    'discontinued': 0,
    'description': 'this is description.this is description.this is description.this is description.',
    'image_url': 'https://i.gyazo.com/af0f2bff4b6b19f3f274947c543eb27c.jpg',
  }
]

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


export default {
  fetchProducts: fetchProducts
}