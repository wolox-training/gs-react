import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Router>
      <PublicRoute exact path="/" component={Login} redirect="/home" />
      <PrivateRoute exact path="/home" component={Home} redirect="/" />
      <PublicRoute path="/signUp" component={SignUp} redirect="/home" />
    </Router>
  );
}

export default App;
