const _products = [
  {
    'id': 1,
    'name': 'iPad 4 Mini（台湾製）',
    'model_number': '',
    'price': 12345,
    'stock': 3,
    'discontinued': 0,
    'discription': 'this is discription.this is discription.this is discription.this is discription.',
    'image_url': 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-8.jpg',
  },
  {
    'id': 2,
    'name': 'iPhone 5（台湾製）',
    'model_number': '',
    'price': 6789,
    'stock': 2,
    'discontinued': 0,
    'discription': 'this is discription.this is discription.this is discription.this is discription.',
    'image_url': 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-8.jpg',
  },
  {
    'id': 3,
    'name': 'iPhone XR（台湾製）',
    'model_number': '',
    'price': 123456789,
    'stock': 1,
    'discontinued': 0,
    'discription': 'this is discription.this is discription.this is discription.this is discription.',
    'image_url': 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-8.jpg',
  }
]

const fetchProducts = async () => {
//  const res = await axios.get('url', {});
//  return res.data
  return _products;
};


export default {
  fetchProducts: fetchProducts
}