import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import * as appActions from '../../state/app.actions';
import { EndRoundPage } from '../end-round/end-round.page';
import { CloseModalEndRound, GameActionTypes } from './game.actions';


@Injectable({
    providedIn: 'root'
})
export class GameEffects {

    constructor(
        private _actions: Actions,
        private _modal: ModalController) { }

    @Effect({ dispatch: false })
    showModalEndRound$ = this._actions.pipe(
        ofType(GameActionTypes.ShowModalEndRound),
        mergeMap(() => this._modal.create({ component: EndRoundPage })),
        mergeMap(modal => modal.present()));

    @Effect({ dispatch: false })
    closeModalNewGame$ = this._actions.pipe(
        ofType(GameActionTypes.CloseModalEndRound),
        mergeMap(() => this._modal.dismiss()));

    @Effect()
    endRoundResults$ = this._actions.pipe(
        ofType(appActions.AppActionTypes.EndRoundResults),
        map(() => new CloseModalEndRound())
    );
}
