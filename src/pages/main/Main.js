// Dependencies
import React from 'react';

// Components
import Pokemon from '@components/pokemon';

const Main = () => {
  return (
    <>
      <div className="main-page row">
        <div className="col-md-3 sidebar">
          <Pokemon.List />
        </div>

        <div className="col-md-9 main-content">
          <Pokemon.Details />
        </div>
      </div>
    </>
  );
};

Main.propTypes = {};

export default Main;
