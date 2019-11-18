const { readdirSync } = require('fs')
const _ = require('lodash');

const PRODUCTS_PATH = 'static/products';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);


const products = getDirectories(`${__dirname}/${PRODUCTS_PATH}/`).map(productDir => ({
  product: require(`${__dirname}/${PRODUCTS_PATH}/${productDir}`),
  productDir: `${PRODUCTS_PATH}/${productDir}`
})).map((data, id) => ({
  id,
  imageUrl: `${data.productDir}/${data.product.картинка}`,
  name: data.product.название,
  description: data.product.описание,
  tags: data.product.тэги,
  price: data.product.цена
}));

const tags = products

module.exports = {  
  products
}  





