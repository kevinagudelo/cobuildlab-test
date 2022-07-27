import { gql } from "@apollo/client";
const ADD_TODO = gql`
  mutation createTodo($title: String!, $done: Boolean!) {
    createTodo(title: $title, done: $done) {
      id
      title
      done
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $title: String!, $done: Boolean!) {
    updateTodo(id: $id, title: $title, done: $done) {
      id
      title
      done
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
      done
    }
  }
`;

export { ADD_TODO, UPDATE_TODO, DELETE_TODO };
