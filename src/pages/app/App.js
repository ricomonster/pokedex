// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Main from '@pages/main';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

App.propTypes = {};

export default App;
