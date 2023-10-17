// import React from 'react'
import { useState } from "react";
import styles from "./app.module.css";
import Navbar from "./components/Navbar/Navbar";
import Todos from "./pages/Todos/Todos";
import Kanban from "./pages/Kanban/Kanban";
import "./main.css";
import { stringToDate } from "./components/DatePicker/calenderData";
import { data,permanentStatusList } from "./components/constants";

function App() {
  const [tasks, setTasks] = useState(
    data.map((task) => {
      return {
        ...task,
        due_date: new Date(task.due_date).toLocaleDateString("en-GB"),
        status:
          task.status !== "Completed"
            ? new Date(task.due_date) < new Date()
              ? "Delayed"
              : task.status
            : task.status,
        id: crypto.randomUUID(),
      };
    })
  );
  const [navState, setNavState] = useState(0);
  const [statusList, setStatusList] = useState(
    permanentStatusList.map((st) => {
      return { ...st, id: crypto.randomUUID() };
    })
  );

  const handleStatusChange = (id, status) => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          task.status = status
            ? "Complete"
            : new Date() > stringToDate(task.due_date, "dd/MM/yyyy")
            ? "Delayed"
            : "Active";
          return task;
        }
        return task;
      });
    });
  };

  const taskMethods = {
    addTask: (task) => {
      setTasks((currentTasks) => {
        return [...currentTasks, { ...task, id: crypto.randomUUID() }];
      });
    },
    deleteTask: (task) => {
      setTasks((currentTasks) => {
        return currentTasks.filter((currTask) => currTask.id !== task.id);
      });
    },
    updateTask: (task) => {
      setTasks((currentTasks) => {
        return currentTasks.map((currTask) => {
          if (currTask.id === task.id) return task;
          return currTask;
        });
      });
    },
    updateTaskStatus: (id, status) => {
      console.log("m_here");
      setTasks((currTasks) => {
        return currTasks.map((currTask) => {
          if (currTask.id === id) {
            let newTask = { ...currTask, status: status };
            return newTask;
          }
          return currTask;
        });
      });
    },
    clearCompleted: () => {
      setTasks((currentTasks) => {
        return currentTasks.filter((task) => task.status !== "Complete");
      });
    }
  }

  const handleNavClick = (newState) => {
    setNavState(newState);
  };

  const getUserTasks = () => {
    return tasks.filter((task) => task.assignee === "John Snow");
  };

  const deleteStatus = (_status) => {
    setStatusList((currentStatusList) => {
      setTasks((currTasks) => {
        return currTasks.filter((task) => task.status !== _status.name);
      });
      return currentStatusList.filter((currStat) => currStat.id !== _status.id);
    });
  };

  const addStatus = (title) => {
    setStatusList((currentStatusList) => {
      if (title !== "") {
        return [
          ...currentStatusList,
          { name: title, type: "custom", id: crypto.randomUUID() },
        ];
      }
      return currentStatusList;
    });
  };
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.appName}>Todo - Kanban</h1>
      <Navbar state={navState} onclick={handleNavClick} />
      <div className={styles.container}>
        {!navState ? (
          <Todos
            getUserTasks={getUserTasks}
            statusHandler={handleStatusChange}
            taskMethods={taskMethods}
            statusList={statusList}
          />
        ) : (
          <Kanban
            statusList={statusList}
            addStatus={addStatus}
            deleteStatus={deleteStatus}
            tasks={tasks}
            taskMethods={taskMethods}
          />
        )}
      </div>
    </div>
  );
}

export default App;
