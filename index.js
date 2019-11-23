const express = require('express');
const path = require('path');

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

const app = express();

// Expres API
app.get('/api/heartbeat', (req, res) => {
  res.json({
    isAlive: true
  });
});

app.post('/api/order', (req, res) => {
  console.log(req.body.json());
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