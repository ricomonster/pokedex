// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-page">
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Search Pokémon..."
          />
        </div>
      </form>

      <div className="pokemon-list">
        <Link to={`/pokemon`} className="card" style={{ width: '20%' }}>
          <img
            alt="Mewtwo"
            className="card-img-top"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
          />

          <div className="card-body">
            <h5 className="card-title">Mewtwo</h5>
            <p className="card-text">Psychic</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
