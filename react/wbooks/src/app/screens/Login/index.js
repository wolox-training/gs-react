import React from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

function Login() {
  return <div className={styles.container}>{i18next.t('LOGIN:login')}</div>;
}

export default Login;
