import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../state/app.state';
import * as MainMenuActions from './state/main-menu.actions';

@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.page.html',
  styleUrls: ['main-menu.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuPage {

  constructor(
    private store: Store<State>) { }

  newGame() {
    this.store.dispatch(new MainMenuActions.ShowModalNewGame());
  }
}
