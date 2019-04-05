import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './../components/Header';
import FinderPlayerForm from './../components/FinderPlayerForm';
import TableResultFinder from './../components/TableResultFinder';

const initialValues = {
  playerName: '', // ex: Leonel Messi
  position: '', // ex: Central Midfield
  age: '' // ex: 18
};

const selectOptions = [
  { value:"", label: "Position" },
  { value:"Attacking Midfield", label: "Attacking Midfield" },
  { value:"Central Midfield", label: "Central Midfield" },
  { value:"Centre-Back", label: "Centre-Back" },
  { value:"Centre-Forward", label: "Centre-Forward" },
  { value:"Defensive Midfield", label: "Defensive Midfield" },
  { value:"Keeper", label: "Keeper" },
  { value:"Left Midfield", label: "Left Midfield" },
  { value:"Left Wing", label: "Left Wing" },
  { value:"Left-Back", label: "Left-Back" },
  { value:"Right-Back", label: "Right-Back" }
];

class FootballPlayerFinder extends Component {
  constructor() {
    super();

    document.title = 'Site Title';
  }

  handleOnSubmit = (values, actions) => {
    setTimeout(function() { 
      console.log(values)
      console.log('llamada a la api')
      actions.setSubmitting(false); 
    }, 2000);
  }

  render() {
    return(
      <div>
        <h1>FootballPlayerFinder Container encargado de la logica</h1>
        <h1>A continuacion abajo, los componentes encargados solamente del renderizado</h1>
        <Header />
        <FinderPlayerForm 
          onSubmit={this.handleOnSubmit}
          initialValues={initialValues}
          selectOptions={selectOptions}
        />
        <TableResultFinder />
      </div>
    )
  }
};

FootballPlayerFinder.propTypes = {

};

export default FootballPlayerFinder;