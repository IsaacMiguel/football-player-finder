import React from 'react';
import PropTypes from 'prop-types';

const TableResultFinder = ({ players }) => {
  return(
    players.map((e, i) => {
      const { name } = e;
      return <p key={i}>{name}</p>
    })
  )
};

TableResultFinder.propTypes = {
  players: PropTypes.array.isRequired
};

export default TableResultFinder;