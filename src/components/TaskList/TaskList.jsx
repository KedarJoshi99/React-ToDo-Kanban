import PropTypes from "prop-types";
// import { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";

function TaskList({
  tasks,
  status,
  statusList,
  taskMethods
}) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TASK_ITEM,
    drop: (item) => {
      taskMethods.updateTaskStatus(item.id, status);
    },
  }));

  return (
    <div className={styles.scrollable} ref={drop}>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            statusList={statusList}
            taskMethods={taskMethods}
          />
        );
      })}
    </div>
  );
}
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  statusList: PropTypes.array,
  taskMethods: PropTypes.object
};

export default TaskList;
