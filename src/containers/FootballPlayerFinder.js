import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './../components/Header';
import FinderPlayerForm from './../components/FinderPlayerForm';
import TableResultFinder from './../components/TableResultFinder';
import { SELECT_OPTIONS } from './../constants';
import { fetchFootballPlayers } from './../actions/fetchFootballPlayers';

const initialValues = {
  playerName: '', // ex: Leonel Messi
  position: '', // ex: Central Midfield
  age: '' // ex: 18
};

class FootballPlayerFinder extends Component {
  constructor() {
    super();

    document.title = 'Site Title';
  }

  handleOnSubmit = (values, actions) => {
    setTimeout(() => { 
      console.log(values)
      console.log('llamada a la api')
      this.props.fetchFootballPlayers();
      actions.setSubmitting(false); 
    }, 1000);
  }

  render() {
    return(
      <div>
        <Header />
        <FinderPlayerForm 
          onSubmit={this.handleOnSubmit}
          initialValues={initialValues}
          selectOptions={SELECT_OPTIONS}
        />
        <TableResultFinder />
      </div>
    )
  }
};

FootballPlayerFinder.propTypes = {
  fetchFootballPlayers: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchFootballPlayers
};

export default connect(null, mapDispatchToProps)(FootballPlayerFinder);