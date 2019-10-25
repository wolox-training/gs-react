import React from 'react';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Login() {
  return <div className={styles.container}>{t('LOGIN:login')}</div>;
}

export default Login;
