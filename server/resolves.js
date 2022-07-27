import { v4 as uuidv4 }  from 'uuid'
const todos = [];

const resolvers = {
  
  Query: {
    allTodos: () => todos,
  },
  Mutation: {
    createTodo: (_, { title, done }) => {
      const todo = {
        id: uuidv4(),
        title,
        done,
      };
      todos.push(todo);
      return todo;
    },
    updateTodo: (_, { id, done, title }) => {
      const todoIndex = todos.findIndex((todo) => (todo.id == id));
      let todo ={}
      todo.id = id 
      todo.title = title
      todo.done = done;
      todos[todoIndex]= todo
      return todo;
    },
    deleteTodo: (_, { id }) => {
      const todoIndex = todos.findIndex((todo) => todo.id == id);
      const todo = todos[todoIndex];
      todos.splice(todoIndex, 1);
      return todo;
    },
  },
};
export {resolvers, todos};

