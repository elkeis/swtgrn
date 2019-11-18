const { readdirSync } = require('fs')
const _ = require('lodash');

const PRODUCTS_PATH = 'static/products';

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);


const productsRaw = getDirectories(`${__dirname}/${PRODUCTS_PATH}/`).map(productDir => ({
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

const tags = _.uniq(productsRaw.flatMap(p => p.tags)).map((t, i) => ({
  id: i,
  name: t
}));

const products = productsRaw.map(pr => ({
  ...pr,
  tags: pr.tags.map(t => tags.find(tag => tag.name === t))
}));

module.exports = {  
  products,
  tags
}