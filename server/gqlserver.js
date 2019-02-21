const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./gql/Queries.js');
const Mutation = require('./gql/Mutations.js');
const Subscription = require('./gql/Subscriptions.js');
const db = require('./../db/index.js');

db.connect((err) => {
  if (err) {
    console.error('db connection error', err.stack)
  } else {
    console.log('connected to db')
  }
})

const server = new GraphQLServer({ 
  typeDefs : './server/gql/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: db
  }) 
});

server.start(() => console.log('Server is running on localhost:4000')); 