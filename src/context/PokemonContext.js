// Dependencies
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Hooks
import useGetRequest from '@hooks/useGetRequest';

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const [pokemon, setPokemon] = useState({});

  // Set the pokemon request hook
  const [response, getPokemonData] = useGetRequest(pokemonData.url || '');

  // Sets the request to get the detail of a pokemon
  const getPokemon = pokemon => {
    // Set the loading to true
    setLoading(true);

    // Set the pokemon
    setPokemonData(pokemon);
  };

  // Listens for changes in the pokemon state.
  useEffect(() => {
    if (pokemonData.url) {
      const fetchingPokemon = async () => {
        await getPokemonData();
      };

      fetchingPokemon();
    }
  }, [pokemonData]);

  // Listens for changes in the response
  useEffect(() => {
    console.log('res', response);
    if (loading && !response.loading && response.data && response.data.id) {
      setLoading(false);

      // set pokemon details
      setPokemon(response.data);
    }
  }, [response]);

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        getPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.any,
};

export default PokemonContext;
