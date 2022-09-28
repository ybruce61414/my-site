import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss'

const Layout = () => {
  return (
    <div className={`${styles.layout}`}>
      <header className={styles.header}>header</header>
      <Outlet />
      <footer id={styles.footer}>footer</footer>
    </div>
  )
}

export default Layout;