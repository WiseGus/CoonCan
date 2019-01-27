import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getRoundNo } from '../state/app.selectors';
import { State } from '../state/app.state';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPage {

  round$: Observable<number>;

  constructor(private _store: Store<State>) { }

  ionViewWillEnter() {
    this.round$ = this._store.pipe(select(getRoundNo));
  }
}
