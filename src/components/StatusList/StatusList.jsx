// import React from "react";
import PropTypes from "prop-types";
import styles from "./StatusList.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import StatusItem from "../StatusItem/StatusItem";
import TaskList from "../TaskList/TaskList";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function StatusList({
  statusList,
  addStatus,
  tasks,
  deleteStatus,
  taskMethods,
}) {
  StatusList.propTypes = {
    statusList: PropTypes.array,
    addStatus: PropTypes.func,
    tasks: PropTypes.array,
    deleteStatus: PropTypes.func,
    taskMethods: PropTypes.func,
  };

  const [tittle, setTitle] = useState("");

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        {statusList.map((_status) => {
          let statusCol =
            _status.name === "Active"
              ? "var(--neon-yellow)"
              : _status.name === "Complete"
              ? "var(--neon-green)"
              : _status.name === "Delayed"
              ? "var(--neon-red)"
              : "var(--neon-cyan)";
          let taskList = tasks.filter((task) => task.status === _status.name);
          return (
            <StatusItem
              key={_status.id}
              statusCol={statusCol}
              status={_status}
              deleteStatus={deleteStatus}
            >
              <TaskList
                tasks={taskList}
                status={_status.name}
                statusList={statusList}
                taskMethods={taskMethods}
              />
            </StatusItem>
          );
        })}
        <div>
          <StatusItem>
            <div className={styles.customStatusBtn} style={{ minWidth: 270 }}>
              <input
                className={styles.customInput}
                type="text"
                placeholder="Add Custom Status"
                value={tittle}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <IoIosAddCircleOutline
                className={styles.btn}
                size={24}
                onClick={() => {
                  addStatus(tittle);
                }}
              />
            </div>
          </StatusItem>
        </div>
      </div>
    </DndProvider>
  );
}

export default StatusList;
