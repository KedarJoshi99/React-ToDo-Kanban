import { useState } from "react";
import HeadBar from "../../components/HeadBar/HeadBar";
import PropTypes from "prop-types";
import styles from "./Todo.module.css";
import TodoItem from "../../components/TodoItem/TodoItem";
import Modal from "../../components/Modal/Modal";
import TaskForm from "../../components/TaskForm/TaskForm";

function Todos({
  getUserTasks,
  statusHandler,
  taskMethods,
  statusList
}) {
  const [statusFilter, setStatusFilter] = useState("all");
  const [isUpdate, setIsUpdate] = useState({ open: false, task: {} });
  const filterOnClickHandler = (filter) => {
    setStatusFilter(filter);
  };
  const toDos = getUserTasks();
  let filteredTodos;
  if (statusFilter === "all") {
    filteredTodos = toDos;
  } else {
    filteredTodos = toDos.filter((_task) => _task.status === statusFilter);
  }
  return (
    <>
      <Modal
        open={isUpdate.open}
        onClose={() => {
          setIsUpdate((current) => {
            return { ...current, open: false };
          });
        }}
      >
        <TaskForm
          updateTaskObject={{ updateTask:taskMethods.updateTask, task:isUpdate.task}}
          closeModal={() => {
            setIsUpdate((current) => {
              return { ...current, open: false };
            });
          }}
          statusList={statusList}
        />
      </Modal>
      <HeadBar
        FilterBy={statusFilter}
        FilterHandler={filterOnClickHandler}
        taskMethods={taskMethods}
        statusList={statusList}
      />
      <div className={styles.container}>
        {filteredTodos.map((task) => {
          return (
            <TodoItem
              task={task}
              key={task.id}
              statusHandler={statusHandler}
              deleteTask={taskMethods.deleteTask}
              updateTask={(task) => {
                setIsUpdate(()=> {return {open:true,task:task}});
              }}
            />
          );
        })}
      </div>
    </>
  );
}

Todos.propTypes = {
  getUserTasks: PropTypes.func,
  statusHandler: PropTypes.func,
  taskMethods: PropTypes.object,
  statusList: PropTypes.array
};

export default Todos;
