import { createStore, compose } from 'redux';
import reducers from './../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers());