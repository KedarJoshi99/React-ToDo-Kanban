// import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css" 
function Navbar({ state, onclick }) {
  Navbar.propTypes = {
    state: PropTypes.number,
    onclick: PropTypes.func,
  };
  return (
    <nav className={styles.navbar}>
      <div
        className={state === 0 ? `${styles.nav} ${styles.active}` : `${styles.nav}`}
        onClick={() => onclick(0)}
      >
        My Todos
      </div>
      <div
        className={state === 1 ? `${styles.nav} ${styles.active}` : `${styles.nav}`}
        onClick={() => onclick(1)}
      >
        Kanban
      </div>
    </nav>
  );
}

export default Navbar;
