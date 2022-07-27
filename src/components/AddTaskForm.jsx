import { useState } from "react";
import { LeyendaError } from "./Validation";
const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  const [validation, setValidation] = useState(true);
  const validacion = () => {
    const expresionRegular = /^[a-zA-ZÀ-ÿ\s0-9_-]{4,40}$/;
    if (expresionRegular.test(newTask)) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };
  const btnValidation = () => {
    if (!newTask) {
      return true;
    } else {
      return !validation;
    }
  };

  return (
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input
            placeholder="Write a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
            onKeyUp={validacion}
            onBlur={validacion}
          />
        </div>
        <div className="col-auto">
          <button
            disabled={btnValidation()}
            onClick={addTask}
            className="btn btn-lg btn-success"
          >
            Add Task
          </button>
        </div>
      </div>
      <br />
      <LeyendaError valid={validation}>
        The task must be from 4 to 40 characters
      </LeyendaError>
      <br />
      <br />
    </>
  );
};

export default AddTaskForm;
