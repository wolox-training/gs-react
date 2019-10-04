import React from 'react';

import Login from './app/screens/Login';
import './App.css';

const handleSubmit = values => {
  console.log(values);
};

function App() {
  return (
    <div className="App">
      <Login handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
