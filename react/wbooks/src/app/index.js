import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './styles.module.scss';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/sign_up" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
