import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './styles.module.scss';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Route exact path="/Signup" component={SignUp} />
        <Route path="/Login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
