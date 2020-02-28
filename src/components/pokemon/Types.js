// Dependencies
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Type from './Type';

const Types = ({ types }) => {
  const [sortedTypes, setSortedTypes] = useState([]);

  useEffect(() => {
    if (types && types.length > 0) {
      types.sort((a, b) => {
        return a.slot - b.slot;
      });

      setSortedTypes(types);
    }
  }, [types]);

  return (
    <>
      {sortedTypes &&
        sortedTypes.map((type, t) => {
          return <Type key={t} type={type.type.name} />;
        })}
    </>
  );
};

Types.propTypes = {
  types: PropTypes.array,
};

export default Types;
