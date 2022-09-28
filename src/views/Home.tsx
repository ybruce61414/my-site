import React from 'react';
import { Link } from "react-router-dom";
import styles from '../common/styles.module.scss';

import useDOMControl from "../hooks/useDOMControl";
import { p5Function } from '../utils/sketchP5';

const Home = () => {
  return (
    <div className={styles['vertical-container']}>
      <header>
        <h1>Home</h1>
        <nav>
          <Link to="about">About</Link>
        </nav>
      </header>
      <section className={styles['horizontal-container']}>
        {useDOMControl(p5Function)}
      </section>
    </div>
  )
};

export default Home;