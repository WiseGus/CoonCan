import { Component } from '@angular/core';
import { GameSessionService } from '../game-session.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public gameSession: GameSessionService) {
  }

}
