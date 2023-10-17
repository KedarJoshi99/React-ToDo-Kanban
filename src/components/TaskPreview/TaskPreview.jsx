// import React from 'react'
import PropTypes from "prop-types";
import styles from "./TaskPreview.module.css";
import DatePicker from "../DatePicker/DatePicker";
import { useState, useCallback } from "react";

function TaskPreview({ task, updateTask, statusList, closeModal, deleteTask }) {
  TaskPreview.propTypes = {
    task: PropTypes.object,
    updateTask: PropTypes.func,
    statusList: PropTypes.array,
    deleteTask: PropTypes.func,
    closeModal: PropTypes.func,
  };

  const [newTask, setNewTask] = useState(task);
  const [changed, setChanged] = useState(false);

  const customStyle = {
    padding: 0,
    border: "none",
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
    backgroundColor: "var(--background)",
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewTask((currentTask) => {
      setChanged(true);
      return { ...currentTask, [name]: value };
    });
  };
  // useEffect(()=>{
  //   console.log(newTask);
  // },[newTask])

  let handleDateChange = useCallback(
    (dateData) => {
      setNewTask((currentTask) => {
        if (dateData !== newTask.due_date) {
          setChanged(true);
        }

        return { ...currentTask, due_date: dateData };
      });
    },
    [newTask.due_date]
  );
  return (
    <div className={styles.container}>
      <input
        className={styles.title}
        name="title"
        style={customStyle}
        type="text"
        value={newTask.title}
        onChange={onChangeHandler}
      />
      <div className={styles.row}>
        <div className={styles.elementContainer}>
          <span style={{ marginRight: 10 }}> Due Date:</span>
          <div className={styles.mainElement}>
            <DatePicker
              defaultValue={newTask.due_date}
              dateFormat={"dd/MM/yyyy"}
              onChange={handleDateChange}
              nonInput={true}
            />
          </div>
        </div>
        <div className={styles.elementContainer}>
          <span style={{ marginRight: 10 }}> Assignee:</span>
          <div className={styles.mainElement}>
            <select
              name="assignee"
              id="assignee"
              style={{ ...customStyle, fontSize: "1rem" }}
              onChange={onChangeHandler}
              value={newTask.assignee}
            >
              <option value="John Snow">John Snow</option>
              <option value="Peter Jones">Peter Jones</option>
              <option value="Susan Smith">Susan Smith</option>
              <option value="John Doe">John Doe</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <span
          style={{ marginRight: 10, fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Description
        </span>
      </div>
      <div className={styles.row}>
        <textarea
          name="description"
          id=""
          style={{ ...customStyle, fontSize: "1rem" }}
          onChange={onChangeHandler}
          value={task.description}
          className={styles.description}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.elementContainer}>
          <span style={{ marginRight: 10 }}>Status:</span>
          <select
            name="status"
            id=""
            style={{ ...customStyle, fontSize: "1rem" }}
            value={newTask.status}
            onChange={onChangeHandler}
          >
            {statusList.map((status) => {
              return (
                <option key={status.id} value={status.name}>
                  {status.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.elementContainer}>
          <span style={{ marginRight: 10 }}> Priority: </span>
          <select
            style={{ ...customStyle, fontSize: "1rem" }}
            name="priority"
            id=""
            value={newTask.priority}
            onChange={onChangeHandler}
          >
            <option value="High"> High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      <div
        className={styles.row}
        style={{ justifyContent: "center", gap: changed ? "1.5rem" : 0 }}
      >
        <button
          style={{
            opacity: changed ? "1" : "0",
            width: changed ? "auto" : 0,
            height: changed ? "auto" : 0,
            cursor: changed ? "pointer" : "auto",
            padding: changed ? "12px 8px" : 0,
          }}
          className={styles.btn}
          onClick={() => {
            if (changed) {
              updateTask(newTask);
              closeModal();
            }
          }}
        >
          Save Changes
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            deleteTask(newTask);
          }}
        >
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default TaskPreview;
