import {gql} from '@apollo/client'
const query = gql`{
    allTodos {
      id
      title
      done
    }
  }`;

  export {query}