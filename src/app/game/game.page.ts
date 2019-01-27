import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Player } from '../player';
import { getGameNo, getPlayers, getRoundNo } from '../state/app.selectors';
import { State } from '../state/app.state';
import { ShowModalEndRound } from './state/game.actions';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamePage implements OnInit {

  players$: Observable<Player[]>;
  gameNo$: Observable<number>;
  roundNo$: Observable<number>;

  constructor(
    private _store: Store<State>) {
  }

  ngOnInit(): void {
    this.players$ = this._store.select(getPlayers);
    this.gameNo$ = this._store.select(getGameNo);
    this.roundNo$ = this._store.select(getRoundNo);
  }

  ionViewWillEnter() {
  }

  getColor(points: number): string {
    if (points <= 50) {
      return 'success';
    }
    if (points <= 75) {
      return 'warning';
    }
    return 'danger';
  }

  endRound() {
    this._store.dispatch(new ShowModalEndRound());
  }
}
