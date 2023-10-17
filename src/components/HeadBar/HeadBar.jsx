// import React from "react";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./HeadBar.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
function HeadBar({ FilterBy, FilterHandler, taskMethods,statusList }) {
  const [isOpen, setIsOpen] = useState(false);

  HeadBar.propTypes = {
    FilterBy: PropTypes.string,
    FilterHandler: PropTypes.func,
    taskMethods: PropTypes.object,
    statusList: PropTypes.array
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.headbar}>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <TaskForm
          addTask={taskMethods.addTask}
          closeModal={() => {
            setIsOpen(false);
          }}
          statusList={statusList}
        />
      </Modal>

      <div className={styles.left}>
        <IoIosAddCircleOutline
          className={styles.icon}
          color="var(--neon-cyan)"
          size={35}
          style={{ cursor: "pointer" }}
          onClick={openModal}
        />
      </div>
      <div className={styles.mid}>
        <div
          className={
            FilterBy === "all"
              ? `${styles.btnFilter} ${styles.btn} ${styles.active}`
              : `${styles.btnFilter} ${styles.btn}`
          }
          onClick={() => FilterHandler("all")}
        >
          All
        </div>
        <div
          className={
            FilterBy === "Active"
              ? `${styles.btnFilter} ${styles.btn} ${styles.active}`
              : `${styles.btnFilter} ${styles.btn}`
          }
          onClick={() => FilterHandler("Active")}
        >
          Active
        </div>
        <div
          className={
            FilterBy === "Delayed"
              ? `${styles.btnFilter} ${styles.btn} ${styles.active}`
              : `${styles.btnFilter} ${styles.btn}`
          }
          onClick={() => FilterHandler("Delayed")}
        >
          Delayed
        </div>
        <div
          className={
            FilterBy === "Complete"
              ? `${styles.btnFilter} ${styles.btn} ${styles.active}`
              : `${styles.btnFilter} ${styles.btn}`
          }
          onClick={() => FilterHandler("Complete")}
        >
          Completed
        </div>
      </div>
      <div className={styles.right} onClick={taskMethods.clearCompleted}>
        Clear Completed!
      </div>
    </div>
  );
}

export default HeadBar;
