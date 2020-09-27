var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    foobar: String
    users: [User]
  }

  type User {
    id: Int
    firstname: String
    lastname: String
    role: String
    email: String
  }

  type NotepadTab {
    id: Int
    owner: User
    text: String
    lastsave: DateTime
    }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  foobar: () => {
    return 'Indeed, it is very foobar...';
  },
  users: () => {
    
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');