import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Player } from '../../player';
import { getPlayers, getRoundNo, State } from '../../state';
import * as appActions from '../../state/app.actions';
import { CloseModalEndRound } from '../state/game.actions';

@Component({
  selector: 'app-end-round',
  templateUrl: './end-round.page.html',
  styleUrls: ['./end-round.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EndRoundPage implements OnInit {

  roundPlayerPoints: Player[] = [];
  roundNo$: Observable<number>;

  constructor(private _store: Store<State>) { }

  ngOnInit() {
    this.roundNo$ = this._store.pipe(
      select(getRoundNo)
    );

    this._store.pipe(
      select(getPlayers)
    ).subscribe(players => {
      this.roundPlayerPoints = JSON.parse(JSON.stringify(players));
      this.roundPlayerPoints.forEach(p => p.points = 0);
    });
  }

  cancel() {
    this._store.dispatch(new CloseModalEndRound());
  }

  ok() {
    this._store.dispatch(new appActions.EndRound({ players: this.roundPlayerPoints }));
  }
}
