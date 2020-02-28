// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Type = ({ type }) => {
  return <span className={`pokemon-type badge ${type}-type`}>{type}</span>;
};

Type.propTypes = {
  type: PropTypes.string,
};

export default Type;
