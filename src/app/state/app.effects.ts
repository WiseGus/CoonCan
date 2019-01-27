import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';

import * as appActions from '../state/app.actions';
import { getPlayers } from './app.selectors';
import { State } from './app.state';

@Injectable({
    providedIn: 'root'
})
export class AppEffects {

    count = 0;

    constructor(
        private _store: Store<State>,
        private _actions: Actions,
        private _router: Router) { }

    @Effect({ dispatch: false })
    newGameReady$ = this._actions.pipe(
        ofType(appActions.AppActionTypes.NewGameReady),
        mergeMap(() => this._router.navigate(['/tabs/game']))
    );


    @Effect()
    endRound$ = this._actions.pipe(
        ofType(appActions.AppActionTypes.EndRound),
        map((playerResults: appActions.EndRound) => playerResults.payload.players),
        withLatestFrom(this._store.pipe(select(getPlayers))),
        map(([endRoundResults, players]) => {
            players.forEach(player => {
                player.points += endRoundResults.find(p => p.name === player.name).points;
            });

            players.forEach(player => {
                if (player.points > 100) {
                    const maxPoints = Math.max(...players.filter(p => p.name !== player.name && p.points <= 100)
                        .map(p => p.points));
                    player.points = maxPoints;
                    player.hats++;
                }
            });

            return new appActions.EndRoundResults({ players: players });
        })
    );
}
