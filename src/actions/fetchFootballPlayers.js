import moment from 'moment';
import { FETCH_FOOTBAL_PLAYERS } from './../constants';
import { urlGetFootballPlayers } from './../api/urls';

const existName = (original, pretend) => original.toLowerCase().indexOf(pretend.toLowerCase()) !== -1;
const ageFromDate = dateOfBirth => moment().diff(dateOfBirth, 'years');

/**
 * Filtramos el resultado de la api por la busqueda ingresada
 * @param { Object } objeto - payload de la busqueda
 * @param { String } objeto.playerName - Nombre del jugador
 * @param { String } objeto.position - Posicion del jugador
 * @param { Number } objeto.age - edad del jugador
 * @return { Array } busqueda filtrada
 */
const filterPlayers = ({ playerName, position, age, players }) => {
  const filter = players.reduce((acc, current) => {
    const { name, position: fromApiPosition, dateOfBirth } = current;

    if(playerName && existName(name, playerName)) return [...acc, current];
    if(position && position === fromApiPosition) return [...acc, current];
    if(age && parseInt(age) === ageFromDate(dateOfBirth)) return [...acc, current];

    return [...acc];
  }, []);

  return filter;
};
const setPlayers = payload => ({ type: FETCH_FOOTBAL_PLAYERS, payload });

export const fetchFootballPlayers = payload =>
  (dispatch, getState) => 
    fetch(urlGetFootballPlayers)
      .then(data => (data.json()))
      .then(r => {
        const filtered = filterPlayers(Object.assign(payload, { players: r }));
        dispatch(setPlayers({ players: filtered }))
      })
      .catch(err => console.log("err: ", err))