// import React from "react";
import PropTypes from "prop-types";
import styles from "./taskItem.module.css";
import { ItemTypes } from "../constants";
import { useDrag } from "react-dnd";
import { FiEdit3 } from "react-icons/fi";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import TaskPreview from "../../components/TaskPreview/TaskPreview";
function TaskItem({ task, statusList, taskMethods }) {
  TaskItem.propTypes = {
    task: PropTypes.object,
    statusList: PropTypes.array,
    taskMethods: PropTypes.object,
  };
  const [isOpen, setIsOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK_ITEM,
    item: { id: task.id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  const closeModal = () => {
    setIsOpen(false);
  };

  const showTask = () => {
    setIsOpen(true);
  };

  let assigneeCol =
    task.assignee === "John Snow"
      ? "blue"
      : task.assignee === "Peter Jones"
      ? "pink"
      : task.assignee === "Susan Smith"
      ? "orange"
      : "teal";
  let customStyle = {
    "--assignee-color": `var(--neon-${assigneeCol})`,
    "--assignee-backgorund-color": `var(--neon-${assigneeCol}-secondary)`,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <>
      <Modal open={isOpen} onClose={closeModal}>
        <TaskPreview
          task={task}
          updateTask={taskMethods.updateTask}
          statusList={statusList}
          closeModal={closeModal}
          deleteTask={taskMethods.deleteTask}
        />
      </Modal>
      <div
        className={styles.container}
        style={customStyle}
        ref={drag}
        onClick={showTask}
      >
        <div className={`${styles.row} ${styles.flexDistBet}`}>
          <div className={styles.title}>{task.title}</div>
          <FiEdit3
            className={styles.editBtn}
            stroke={`var(--neon-${assigneeCol})`}
          />
        </div>
      </div>
    </>
  );
}

export default TaskItem;
