import { FETCH_FOOTBAL_PLAYERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGetFootballPlayers } from './../api';
import { urlGetFootballPlayers } from './../api/urls';

export const fetchFootballPlayers = createAction(
  FETCH_FOOTBAL_PLAYERS, 
  apiGetFootballPlayers(urlGetFootballPlayers)
);