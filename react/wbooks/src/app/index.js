import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './styles.module.scss';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <PublicRoute exact path="/" component={Login} redirect="/home" />
        <PrivateRoute exact path="/home" component={Home} redirect="/login" />
        <PublicRoute path="/sign_up" component={SignUp} redirect="/home" />
      </div>
    </Router>
  );
}

export default App;
