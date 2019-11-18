const { readdirSync } = require('fs')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);


module.exports = getDirectories(__dirname).map(d => ({
  product: require(`${__dirname}/${d}`),
  path: d
})).map((data, id) => ({
  id,
  imageUrl: `${data.path}/${data.product.картинка}`,
  name: data.product.название,
  description: data.product.описание,
  tags: data.product.тэги,
  price: data.product.цена
}));