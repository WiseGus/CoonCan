import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';

import { Player } from '../../player';
import * as appActions from '../../state/app.actions';
import { getPlayers } from '../../state/app.selectors';
import { State } from '../../state/app.state';
import * as mainmenuActions from '../state/main-menu.actions';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewGamePage implements OnInit {

  players: Player[] = [];

  private _componentActive: boolean;

  constructor(
    private _store: Store<State>,
    public modal: ModalController) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this._componentActive = true;

    this._store.dispatch(new appActions.NewGame());

    this._store.pipe(
      select(getPlayers),
      takeWhile(() => this._componentActive))
      .subscribe(p => this.players = p);
  }

  ionViewWillLeave() {
    this._componentActive = false;
  }

  addPlayer() {
    this.players.push({
      name: '',
      hats: 0,
      points: 20
    });
  }

  removePlayer(no: number) {
    this.players.splice(no, 1);
  }

  back() {
    this._store.dispatch(new mainmenuActions.CloseModalNewGame());
  }

  ready() {
    this._store.dispatch(new appActions.NewGameReady({ players: this.players }));
  }
}
