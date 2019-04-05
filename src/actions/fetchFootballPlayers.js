import { FETCH_FOOTBAL_PLAYERS } from './../constants';
import { urlGetFootballPlayers } from './../api/urls';

const setPlayers = payload => ({ type: FETCH_FOOTBAL_PLAYERS, payload });

export const fetchFootballPlayers = payload =>
  (dispatch, getState) => 
    fetch(urlGetFootballPlayers)
      .then(data => (data.json()))
      .then(r => dispatch(setPlayers({ players: r })))
      .catch(err => console.log("err: ", err))