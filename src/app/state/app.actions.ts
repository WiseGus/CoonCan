import { Action } from '@ngrx/store';

import { Player } from '../player';

export enum AppActionTypes {
    NewGame = '[App] New game',
    NewGameReady = '[App] New game ready',
    EndRound = '[App] End round',
    EndRoundResults = '[App] End round results',
    AddPlayer = '[App] Add player',
    EditPlayer = '[App] Edit player',
    RemovePlayer = '[App] Remove player'
}

export class NewGame implements Action {
    readonly type = AppActionTypes.NewGame;
}

export class NewGameReady implements Action {
    readonly type = AppActionTypes.NewGameReady;

    constructor(public payload: { players: Player[] }) { }
}

export class EndRound implements Action {
    readonly type = AppActionTypes.EndRound;

    constructor(public payload: { players: Player[] }) { }
}

export class EndRoundResults implements Action {
    readonly type = AppActionTypes.EndRoundResults;

    constructor(public payload: { players: Player[] }) { }
}

export class AddPlayer implements Action {
    readonly type = AppActionTypes.AddPlayer;

    constructor(public payload: { player: Player }) { }
}

export class EditPlayer implements Action {
    readonly type = AppActionTypes.EditPlayer;

    constructor(public payload: { index: number, player: Player }) {
    }
}

export class RemovePlayer implements Action {
    readonly type = AppActionTypes.RemovePlayer;

    constructor(public payload: { index: number }) {
    }
}

export type AppActions = NewGame
    | NewGameReady
    | EndRound
    | EndRoundResults
    | AddPlayer
    | EditPlayer
    | RemovePlayer;
