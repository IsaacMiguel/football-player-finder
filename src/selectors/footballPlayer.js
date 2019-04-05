import { createSelector } from 'reselect';

export const getFootballPlayers = state => state.footballPlayers.length ? state.footballPlayers : [];