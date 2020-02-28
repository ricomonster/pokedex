// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Main from '@pages/main';

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Main />
      </div>
    </>
  );
};

App.propTypes = {};

export default App;
