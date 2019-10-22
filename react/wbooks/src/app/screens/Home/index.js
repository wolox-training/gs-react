import React from 'react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

import logoWolox from '../../assets/LogoWolox.png';

import styles from './styles.module.scss';

const clearTokens = () => {
  localStorage.setItem('token_id', '');
};

function Home() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.woloxImage} src={logoWolox} alt="Wolox" />
      <Link className={styles.logout} to="/" onClick={clearTokens}>
        {t('HOME:logOut')}
      </Link>
    </nav>
  );
}

export default Home;
