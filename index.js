const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pug = require('pug');

const { 
  ApolloServer, 
  gql 
} = require('apollo-server-express');

const {
  products,
  tags
} = require('./data')


// Graphql API
const typeDefs = gql`
  # Product tags (e.g. ingridients )
  type Tag {
    id: ID!,
    name: String,
  }

  # Product type itself
  type Product {
    id: ID!,
    imageUrl: String,
    name: String,
    description: String,
    tags: [Tag],
    price: String,
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    products: [Product],
    tags: [Tag]
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    tags: () => tags
  }
}

// const renderEmailTemplate = pug.compileFile('./email/templates/digest-ecommerce.pug');

const app = express();
app.use(bodyParser.json());

// Expres API
app.get('/api/heartbeat', (req, res) => {
  res.json({
    isAlive: true
  });
});

const template = pug.compileFile('./email/templates/digest-ecommerce.pug');
const opts = {
  order: {
    name:            "#9999",
    link:            "#order-in-shop",
    shipping_method: "DHL Express",
    payment_method:  "VISA *-1234",
    order_price:     "$1,308",
    shipping_price:  "$249",
    total_price:     "$1,557"
  },

  customer: {
    first_name:       "John",
    last_name:        "Doe",
    email:            "john@doe.com",
    shipping_address: "Steve Shipper, 123 Shipping Street Shippington, Kentucky, K2P0S0 United States",
    billing_address:  "Bob Biller, 123 Billing Street, Billtown, Kentucky K2P0S0, United States"
  },

  company: {
    name:      "AnotherShop",
    logo:      "logo.png",
    logowhite: "logo-white.png",
    logow:     "116",
    email:     "hello@greatsimple.io"
  },

  message: {
    web: "#web",
    unsubscribe: "#unsubscribe",
    settings: "#profile-settings",
    date: "2017"
  }
};

console.log(template({Tags: opts}));

app.post('/api/order', (req, res) => {
  console.log(req.body);

  // const email = pug.render(renderEmailTemplate());
  // console.log(email);
  res.json('ok');
});

// host static files (site and images)
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'data')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
});