import { Action } from '@ngrx/store';

export enum GameActionTypes {
    ShowModalEndRound = '[Game] Show modal end round',
    CloseModalEndRound = '[Game] Close modal end round'
}

export class ShowModalEndRound implements Action {
    readonly type = GameActionTypes.ShowModalEndRound;
}

export class CloseModalEndRound implements Action {
    readonly type = GameActionTypes.CloseModalEndRound;
}

export type GameActions = ShowModalEndRound
    | CloseModalEndRound;
