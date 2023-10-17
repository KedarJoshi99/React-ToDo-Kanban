// import React from 'react';
import PropTypes from "prop-types";
import { PiFlagPennantFill } from "react-icons/pi";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import styles from "./TodoItem.module.css";
import { useEffect, useRef, useState } from "react";
function TodoItem({ task, statusHandler, deleteTask, updateTask }) {
  const description = useRef();
  const [isOverflow, setIsOveflow] = useState(false);

  let status = task.status === "Complete" ? true : false;
  let statusColor;
  if (task.status === "Active") {
    statusColor = "yellow";
  } else if (task.status === "Complete") {
    statusColor = "green";
  } else if (task.status === "Delayed") {
    statusColor = "red";
  }

  const customStyle = {
    "--statusColor": `var(--neon-${statusColor})`,
    "--titleDecoration": task.status === "Complete" ? "line-through" : "none",
    "--statusBackground": `var(--neon-${statusColor}-secondary)`,
  };

  
  useEffect(()=>{
    console.log(description.current.clientHeight,description.current.offsetHeight)
    if(description.current.clientHeight < description.current.scrollHeight){
      setIsOveflow(true);
    }
    else{
      setIsOveflow(false);
    }
  },[])

  return (
    <div className={styles.container} style={customStyle}>
      <div className={styles.primaryRow}>
        <div className={styles.left}>
          <label className={styles.label}>
            <input
              className={styles.checkBox}
              type="checkbox"
              checked={status}
              onChange={(e) => {
                statusHandler(task.id, e.target.checked);
              }}
            />
          </label>
          <div className={styles.title}>{task.title}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.btn}>
            <FiEdit3
              size={18}
              className={styles.icon}
              onClick={() => {
                updateTask(task);
              }}
            />
          </div>
          <div className={styles.btn}>
            <FiTrash2
              size={18}
              className={styles.icon}
              onClick={() => {
                deleteTask(task);
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.secondaryRow}>
        <div className={styles.dueDate}>{task.due_date}</div>
        <div ref={description}  className={`${styles.descriptionContainer}`}>
          <span className={`${styles.description}`}>
            {task.description}
          </span>
          {isOverflow && <a>more</a>}
        </div>
        <div className={styles.priority}>
          Priority:
          <PiFlagPennantFill
            size={16}
            style={{
              margin: "4px 8px",
              fill:
                task.priority === "High"
                  ? "var(--neon-red"
                  : task.priority === "Medium"
                  ? "orange"
                  : "var(--neon-cyan",
            }}
          />
          {task.priority}
        </div>
      </div>
    </div>
  );
}
TodoItem.propTypes = {
  task: PropTypes.object,
  statusHandler: PropTypes.func,
  deleteTask: PropTypes.func,
  updateTask: PropTypes.func,
};

export default TodoItem;
