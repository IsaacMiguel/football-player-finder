import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './../components/Header';
import FinderPlayerForm from './../components/FinderPlayerForm';
import TableResultFinder from './../components/TableResultFinder';

class FootballPlayerFinder extends Component {
  render() {
    return(
      <div>
        <h1>FootballPlayerFinder Container encargado de la logica</h1>
        <h1>A continuacion abajo, los componentes encargados solamente del renderizado</h1>
        <Header />
        <FinderPlayerForm />
        <TableResultFinder />
      </div>
    )
  }
};

FootballPlayerFinder.propTypes = {

};

export default FootballPlayerFinder;