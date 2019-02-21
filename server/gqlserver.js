const { GraphQLServer } = require('graphql-yoga');
const Query = require('./gql/Queries.js');
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

const resolvers = {
  Query,
  Staff: {
    helpdesks({staff_slack_id}) {
      console.log(staff_slack_id);
      return db.query({
        text: 'SELECT * FROM helpdesk WHERE staff_slack_id = $1',
        values: [staff_slack_id],
      }) 
        .then(result => {
          console.log(result.rows);
          return result.rows;
        })
        .catch(err => {
          console.log(err);
        });
    },
    helpdeskCount({staff_slack_id}) {
      console.log(staff_slack_id);
      return db.query({
        text: 'SELECT COUNT(*) FROM helpdesk WHERE staff_slack_id = $1',
        values: [staff_slack_id],
      }) 
        .then(result => {
          return result.rows[0].count;
        })
        .catch(err => {
          console.log(err);
        });
    },

  },
  // Mutation,
  // Subscription
}

const server = new GraphQLServer({ 
  typeDefs : './server/gql/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: db
  }) 
});

server.start(() => console.log('Server is running on localhost:4000')); 