// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Sprite = ({ className, pokeId, pokemon }) => {
  return (
    <img
      alt={pokemon}
      className={`pokemon-sprite ${className}`}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
    />
  );
};

Sprite.propTypes = {
  className: PropTypes.string,
  pokeId: PropTypes.number,
  pokemon: PropTypes.string,
};

export default Sprite;
