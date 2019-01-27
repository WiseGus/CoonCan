import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './app.state';

const getAppState = createFeatureSelector<State>('state');

export const getPlayers = createSelector(getAppState, state => state.players);
export const getGameNo = createSelector(getAppState, state => state.gameNo);
export const getRoundNo = createSelector(getAppState, state => state.roundNo);
