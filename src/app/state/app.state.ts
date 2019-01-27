import { Player } from 'src/app/player';

import { AppActions, AppActionTypes } from './app.actions';

export interface AppState {
    state: State;
}

export interface State {
    players: Player[];
    gameNo: number;
    roundNo: number;
}

export const initialState: State = {
    players: [],
    gameNo: 0,
    roundNo: 0
};

export function reducer(state = initialState, action: AppActions): State {

    switch (action.type) {
        case AppActionTypes.NewGame:
            return {
                ...state,
                players: [],
                roundNo: 0
            };

        case AppActionTypes.NewGameReady:
            return {
                ...state,
                players: action.payload.players,
                gameNo: state.gameNo + 1,
                roundNo: 1
            };

        case AppActionTypes.EndRoundResults:
            return {
                ...state,
                players: [...action.payload.players],
                roundNo: state.roundNo + 1
            };

        case AppActionTypes.AddPlayer:
            return {
                ...state,
                players: [
                    ...state.players, action.payload.player
                ]
            };

        case AppActionTypes.EditPlayer:
            return {
                ...state,
                players: [
                    ...state.players.slice(0, action.payload.index),
                    action.payload.player,
                    ...state.players.slice(action.payload.index + 1)
                ]
            };

        case AppActionTypes.RemovePlayer:
            return {
                ...state,
                players: [
                    ...state.players.slice(0, action.payload.index),
                    ...state.players.slice(action.payload.index + 1)
                ],
            };
    }

    return state;
}
