import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';

import { AppActionTypes } from '../../state/app.actions';
import { NewGamePage } from '../new-game/new-game.page';
import { MainMenuActionTypes } from './main-menu.actions';

@Injectable({
    providedIn: 'root'
})
export class MainMenuEffects {

    constructor(
        private _actions: Actions,
        private _modal: ModalController) { }

    @Effect({ dispatch: false })
    showModalNewGame$ = this._actions.pipe(
        ofType(MainMenuActionTypes.ShowModalNewGame),
        mergeMap(() => this._modal.create({ component: NewGamePage })),
        mergeMap(modal => modal.present()));

    @Effect({ dispatch: false })
    closeModalNewGame$ = this._actions.pipe(
        ofType(MainMenuActionTypes.CloseModalNewGame),
        mergeMap(() => this._modal.dismiss()));

    @Effect({ dispatch: false })
    newGameReady$ = this._actions.pipe(
        ofType(AppActionTypes.NewGameReady),
        mergeMap(() => this._modal.dismiss()));
}
