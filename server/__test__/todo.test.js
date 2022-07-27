import { resolvers, todos } from "../resolves";
import { v4 as uuidv4 } from "uuid";

describe("To do resolver (AllTodos)", () => {
  const TodoLists = [
    {
      id: uuidv4(),
      title: "Sacar la basura",
      done: false,
    },
    {
      id: uuidv4(),
      title: "Preparar el desayuno",
      done: false,
    },
  ];

  TodoLists.map((todo) => todos.push(todo));

  test("The information entered corresponds to the information returned.", async () => {
    const toDos = await resolvers.Query.allTodos();
    expect(toDos[0].title).toBe("Sacar la basura");
  });
});
