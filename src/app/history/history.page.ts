import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryPage { }
