import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import DetailOfBook from './screens/DetailOfBook';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Router>
      <PublicRoute exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <PublicRoute path="/signUp" component={SignUp} />
      <PrivateRoute path="/home/book/:id" component={DetailOfBook} />
    </Router>
  );
}

export default App;
