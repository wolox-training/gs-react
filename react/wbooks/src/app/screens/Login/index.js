import React from 'react';

import styles from './styles.module.scss';

const logo = require('../../assets/LogoWolox.png');

function Login() {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logoImage} src={logo} />
      </div>
    </div>
  );
}

export default Login;
