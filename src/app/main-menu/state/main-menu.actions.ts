import { Action } from '@ngrx/store';

export enum MainMenuActionTypes {
    ShowModalNewGame = '[MainMenu] Show modal new game',
    CloseModalNewGame = '[MainMenu] Close modal new game',
}

export class ShowModalNewGame implements Action {
    readonly type = MainMenuActionTypes.ShowModalNewGame;
}

export class CloseModalNewGame implements Action {
    readonly type = MainMenuActionTypes.CloseModalNewGame;
}

export type MainMenuActions = ShowModalNewGame
    | CloseModalNewGame;
