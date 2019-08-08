// Dependencies
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useGetRequest from '@hooks/useGetRequest';

const PokemonTypes = ({ types }) => {
  return (
    <>
      {types.map((type, index) => {
        return <span key={index}>{type.type.name}</span>;
      })}
    </>
  );
};

PokemonTypes.propTypes = {
  types: PropTypes.array,
};

const Main = () => {
  // states
  const [form, setForm] = useState({});
  const [pokemon, setPokemon] = useState({});

  // Request Hook
  const [request, searchPokemon] = useGetRequest(
    `https://pokeapi.co/api/v2/pokemon/${form.keyword}/`
  );

  /**
   * Handles changes in the input fields
   *
   * @param {Event} event
   */
  const handleFormChange = event => {
    event.persist();
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Handles form submission
   *
   * @param {Event} event
   */
  const handleFormSubmit = async event => {
    event.preventDefault();

    // is it loading or don't have a keyword?
    if (request.loading || !form.keyword) {
      // do not proceed
      return false;
    }

    // trigger search
    await searchPokemon();
  };

  useEffect(() => {
    console.log(request.data);
    setPokemon(request.data);
  }, [request]);

  return (
    <>
      <div className="container">
        <div className="main-page" style={{ marginTop: 20 }}>
          <form
            className="form-inline"
            style={{ width: '100%' }}
            onSubmit={handleFormSubmit}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: 'calc(100% - 90px)' }}
              name="keyword"
              onChange={handleFormChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="pokedex">
            <div className="pokemon-info">
              <figure className="pokemon-sprite">
                <img />
              </figure>

              <div className="pokemon-details">
                <h1>{pokemon.name || '--'}</h1>
                <p>Type Pokemon</p>

                <div className="types">
                  <PokemonTypes types={pokemon.types || []} />
                </div>

                <div className="height-weight">
                  <p>
                    <span>Height:</span>
                    <span>100M</span>
                  </p>

                  <p>
                    <span>Weight:</span>
                    <span>100 lbs.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Main.propTypes = {};

export default Main;
