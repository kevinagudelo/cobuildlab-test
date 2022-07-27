import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";
import { query } from "./graphql/queries";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./graphql/mutation.js";
import { useQuery, useMutation } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavBar.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Login Verification

  const { isAuthenticated } = useAuth0();

  // Gql Querys
  ////////////////////////////////
  const [addTodo] = useMutation(ADD_TODO);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  // Temp State
  ///////////////
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  // load todos
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;
  const ToDos = data.allTodos;

  // Add task
  ///////////////////////////
  const addTask = () => {
    addTodo({
      variables: {
        title: newTask,
        done: false,
      },
      refetchQueries: [{ query: query }],
    });
    setNewTask("");
    notify("Task Created");
  };

  // Delete task
  ///////////////////////////
  const deleteTask = (id) => {
    deleteTodo({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: query }],
    });
    notify("Task Deleted");

  };

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let todo = ToDos.find((todo) => todo.id == id);
    updateTodo({
      variables: {
        id: id,
        title: todo.title,
        done: Boolean(!todo.done),
      },
      refetchQueries: [{ query: query }],
    });
  };

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update task
  ///////////////////////////
  const updateTask = () => {
    updateTodo({
      variables: {
        id: updateData.id,
        title: updateData.title,
        done: updateData.status,
      },
      refetchQueries: [{ query: query }],
    });
    setUpdateData("");
    notify("Task Updated");

  };

  //Notification
  /////
  const notify = (text) => {
    toast.info(text, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} />
      <div className="container App">
        <br />
        <br />

        <br />
        <br />

        {updateData && updateData ? (
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : isAuthenticated ? (
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        ) : (
          <div>
            <br />
            <h4>Login to manage your task list</h4>
            <br />
          </div>
        )}

        {/* Display ToDos */}

        {data.allTodos && data.allTodos.length ? "" : "No Tasks..."}

        <ToDo
          isAuthenticated={isAuthenticated}
          toDo={data.allTodos}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />
        <ToastContainer
          position="botton-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
