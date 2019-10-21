import React from 'react';
import { Link } from 'react-router-dom';

import logoWolox from '../../assets/LogoWolox.png';

import styles from './styles.module.scss';

function Home() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.woloxImage} src={logoWolox} alt="Wolox" />
      <Link className={styles.logout} to="/">
        Logout
      </Link>
    </nav>
  );
}

export default Home;
