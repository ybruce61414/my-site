import React from 'react';
import styles from "../common/styles.module.scss";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div className={styles['vertical-container']}>
      <h1>About</h1>
      <nav>
        <Link to="/">Home</Link> |
      </nav>
    </div>
  )
}

export default About