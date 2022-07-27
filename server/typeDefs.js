import {  gql } from 'apollo-server-express'
const typeDefs = gql `
type Todo {
    id: ID!
    title: String!
    done: Boolean!
  }
  type Query {
    allTodos: [Todo!]!
  }
  type Mutation {
    createTodo(title: String!, done: Boolean!): Todo!
    updateTodo(id: ID!, title: String!, done: Boolean!): Todo!
    deleteTodo(id: ID!): Todo!
  }
`
export default typeDefs