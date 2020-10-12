const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    me: User
    users: [User]
  }

  type Book {
      bookid: 
      authors: []
      description
      title
      image
      link
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(email: String!, password: String!): Auth
    removeBook(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;