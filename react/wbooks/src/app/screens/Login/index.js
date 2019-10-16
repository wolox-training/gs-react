import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Login() {
  return (
    <div className={styles.container}>
      <p>{i18next.t('LOGIN:login')}</p>
    </div>
  );
}

export default Login;
