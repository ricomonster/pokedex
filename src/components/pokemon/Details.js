// Dependencies
import React, { useContext, useState, useEffect } from 'react';

// Components
import Types from './Types';

// Context
import PokemonContext from '@context/PokemonContext';

const Details = () => {
  // Load up the context
  const { pokemon } = useContext(PokemonContext);

  // Stores the current pokemon
  const [selectedPokemon, setSelectedPokemon] = useState({});

  // Check if the given pokemon is a new one.
  useEffect(() => {
    if (
      !selectedPokemon ||
      !selectedPokemon.id ||
      (selectedPokemon && selectedPokemon.id !== pokemon.id)
    ) {
      setSelectedPokemon(pokemon);
    }
  }, [selectedPokemon, pokemon]);

  return (
    <>
      <div className="pokemon-details">
        {(!selectedPokemon || !selectedPokemon.id) && (
          <div className="loading">Loading...</div>
        )}

        {selectedPokemon && selectedPokemon.id && (
          <>
            <div className="pokemon-details-header">
              <h1 className="title">
                No.{selectedPokemon.id}{' '}
                <span className="pokemon-name">{selectedPokemon.name}</span>
              </h1>

              <Types types={selectedPokemon.types} />
            </div>

            <ul className="nav nav-tabs">
              <li className="nav-item ">
                <a className="nav-link active" href="#">
                  Species
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stats
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Abilities
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Known Moves
                </a>
              </li>
            </ul>

            <div className="pokemon-details-content">
              <div className="nav-contents"></div>

              <div className="pokemon-image"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

Details.propTypes = {};

export default Details;
