// import React from "react";
import { useCallback, useState } from "react";
import styles from "./TaskForm.module.css";
import PropTypes from "prop-types";
import DatePicker from "../DatePicker/DatePicker";
import { taskTemplate } from "../constants";
function TaskForm({ addTask, closeModal, updateTaskObject, statusList }) {
  const [newTask, setNewTask] = useState(
    updateTaskObject ? updateTaskObject.task : taskTemplate
  );
  const [formError, setFormError] = useState({ error: false, source: {} });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewTask((currentTask) => {
      return { ...currentTask, [name]: value };
    });
  };

  console.log(updateTaskObject ? updateTaskObject.updateDetails : taskTemplate);

  const validate = (taskObject) => {
    let err = { error: false, source: {} };
    if (taskObject.title === "") {
      err.error = true;
      err.source.title = "The task title cannot be empty";
    }
    if (taskObject.status === "") {
      err.error = true;
      err.source.status = "Select Valid Status Option";
    }
    if (taskObject.priority === "") {
      err.error = true;
      err.source.priority = "Select Valid Priority Option";
    }
    if (taskObject.assignee === "") {
      err.error = true;
      err.source.assignee = "Select Valid Assignee";
    }
    return err;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newErr = validate(newTask);
    if (newErr.error) {
      console.log(newErr);
      setFormError(newErr);
    } else if (addTask) {
      addTask(newTask);
      closeModal();
    } else {
      updateTaskObject.updateTask(newTask);
      closeModal();
    }
  };

  let handleDateChange = useCallback((dateData) => {
    console.log(dateData);
    setNewTask((currentTask) => {
      return { ...currentTask, due_date: dateData };
    });
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className={styles.taskForm}
      autoComplete="off"
    >
      <h1>Create Task</h1>
      <div className={styles.row}>
        <div className={styles.rowElement}>
          <label htmlFor="taskItem">Title:</label>
          <input
            type="text"
            id="taskItem"
            name="title"
            value={newTask.title}
            className={`${styles.input} ${
              formError.source.title ? styles.errorBorder : null
            }`}
            style={{ outline: "none", padding: "0 8px" }}
            onChange={onChangeHandler}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.rowElement}>
          <label htmlFor="taskStatus">Status:</label>
          <select
            className={`${styles.input} ${
              formError.source.status ? styles.errorBorder : null
            }`}
            name="status"
            id="taskStatus"
            onChange={onChangeHandler}
            value={newTask.status}
          >
            <option value="">Select an Option</option>
            {statusList.map((status) => {
              return (
                <option key={status.id} value={status.name}>
                  {status.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.rowElement}>
          <label htmlFor="priority">Priority</label>
          <select
            className={`${styles.input} ${
              formError.source.priority ? styles.errorBorder : null
            }`}
            name="priority"
            id="priority"
            onChange={onChangeHandler}
            value={newTask.priority}
          >
            <option value="">Select an Option</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.rowElement}>
          <label htmlFor="Users">Assign To:</label>
          <select
            className={`${styles.input} ${
              formError.source.assignee ? styles.errorBorder : null
            }`}
            name="assignee"
            id="Users"
            onChange={onChangeHandler}
            value={newTask.assignee}
          >
            <option value="">Select an Option</option>
            <option value="John Snow">Self</option>
            <option value="Peter Jones">Peter Jones</option>
            <option value="Susan Smith">Susan Smith</option>
            <option value="John Doe">John Doe</option>
          </select>
        </div>
        <div className={`${styles.rowElement} ${styles.dateSelector}`}>
          <label htmlFor="taskDate">Due Date:</label>
          <DatePicker
            id="taskDate"
            defaultValue={newTask.due_date}
            dateFormat={"dd/MM/yyyy"}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className={styles.colElement}>
        <label htmlFor="description">Task Description:</label>
        <textarea
          className={styles.input}
          style={{
            padding: 8,
            marginTop: 10,
            outline: "none",
            fontSize: "1rem",
          }}
          name="description"
          id="description"
          cols="30"
          rows="4"
          onChange={onChangeHandler}
          value={newTask.description}
        ></textarea>
      </div>
      {formError.error && (
        <di className={styles.errorMessage}>
          {Object.keys(formError.source).map((key) => {
            return (
              <div
                key={key}
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  color: "var(--neon-red)",
                }}
              >
                {formError.source[key]}
              </div>
            );
          })}
        </di>
      )}
      <button className={styles.addTaskBtn}>
        {updateTaskObject ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func,
  closeModal: PropTypes.func,
  updateTaskObject: PropTypes.object,
  statusList: PropTypes.array,
};

export default TaskForm;
