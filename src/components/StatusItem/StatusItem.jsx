// import React from 'react'
import styles from "./StatusItem.module.css";
import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";


function StatusItem({
  status,
  statusCol = "var(--neon-cyan)",
  children,
  deleteStatus,
}) {


  // const deleteStatus = modifyStatusList.deleteStatus
  return (
    <div
      className={styles.statusContainer}
      style={{ "--status-color": statusCol }}
    >
      <div
        className={styles.status}
        style={{
          paddingTop: children && status ? "48px" : "10px",
          height: !status ? "fit-content" : "auto",
        }}
      >
        {status && (
          <div className={styles.header}>
            <span style={{fontWeight:800}}>{status.name}</span>
            {status.type !== "permanent" && (
              <div className={styles.btn}>
                <FiTrash2
                  className={styles.icon}
                  onClick={() => {
                    deleteStatus(status);
                  }}
                  size={18}
                />
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

StatusItem.propTypes = {
  children: PropTypes.node,
  status: PropTypes.object,
  statusCol: PropTypes.string,
  deleteStatus: PropTypes.func,
};

export default StatusItem;
