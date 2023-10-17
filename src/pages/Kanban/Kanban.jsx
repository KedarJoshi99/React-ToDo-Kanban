// import { useState } from "react";
// import styles from "./Kanban.module.css";
import PropTypes from "prop-types";

import StatusList from "../../components/StatusList/StatusList";

function Kanban({
  statusList,
  addStatus,
  tasks,
  deleteStatus,
  taskMethods
}) {
  
  Kanban.propTypes = {
    tasks: PropTypes.array,
    statusList: PropTypes.array,
    deleteStatus: PropTypes.func,
    addStatus: PropTypes.func,
    taskMethods: PropTypes.object
    
  };


  return (
    <>
      <StatusList
        statusList={statusList}
        deleteStatus={deleteStatus}
        tasks={tasks}
        addStatus={addStatus}
        taskMethods={taskMethods}
      />
    </>
  );
}

export default Kanban;
