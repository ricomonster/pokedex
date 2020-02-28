// Dependencies
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Sprite from './Sprite';

// Context
import PokemonContext from '@context/PokemonContext';

// Hooks
import useGetRequest from '@hooks/useGetRequest';

const PokemonListCard = ({ onPokemonSelect, pokemon }) => {
  const splitUrl = pokemon.url.split('pokemon/');
  const id = parseInt(splitUrl[1].split('/')[0], 10);

  return (
    <a className="media pokemon-item" onClick={() => onPokemonSelect(pokemon)}>
      <Sprite className="mr-4" pokemon={pokemon.name} pokeId={id} />
      <div className="media-body">
        <h5 className="mt-0 pokemon-name">{pokemon.name}</h5>
      </div>
    </a>
  );
};

PokemonListCard.propTypes = {
  onPokemonSelect: PropTypes.func,
  pokemon: PropTypes.object,
};

const List = () => {
  // Loadup the context
  const PkContext = useContext(PokemonContext);

  // State
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState('');

  // Request Hook
  const [response, getPokemonList] = useGetRequest(
    nextPage || `https://pokeapi.co/api/v2/pokemon/`
  );

  // Get the data of the selected pokemon from the list
  const getSelectedPokemon = pokemon => {
    PkContext.getPokemon(pokemon);
  };

  // get some basic pokemon listing
  const fetchPokemonList = async () => {
    setLoading(true);
    await getPokemonList();
    setLoading(false);
  };

  // Run once the page loads
  useEffect(() => {
    fetchPokemonList();
  }, []);

  // Check if there are updates in the response
  useEffect(() => {
    if (!loading && !response.loading) {
      // Let's set a default pokemon to be shown in the details
      if (!pokemons || pokemons.length < 1) {
        // Set default
        getSelectedPokemon(response.data.results[0]);
      }

      // Set the list of pokemons
      setPokemons([...pokemons, ...response.data.results]);

      // Set the next page
      setNextPage(response.data.next);
    }
  }, [response, loading]);

  return (
    <>
      <div className="pokemon-list">
        {!loading && pokemons && pokemons.length > 0 && (
          <ul className="list-unstyled">
            {pokemons.map((pokemon, index) => {
              return (
                <PokemonListCard
                  key={index}
                  onPokemonSelect={getSelectedPokemon}
                  pokemon={pokemon}
                />
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

List.propTypes = {};

export default List;
