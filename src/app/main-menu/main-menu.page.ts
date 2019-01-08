import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { GameSessionService } from '../game-session.service';
import { Player } from '../player';
import { NewGamePage } from './new-game/new-game.page';

@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.page.html',
  styleUrls: ['main-menu.page.scss']
})
export class MainMenuPage {

  constructor(
    private _modalController: ModalController,
    private _gameSession: GameSessionService,
    private _router: Router) { }

  async presentModal() {
    const modal = await this._modalController.create({
      component: NewGamePage
    });
    await modal.present();
    const result = await modal.onDidDismiss();
    if (!result.data) {
      return;
    }

    this._gameSession.newGameSession(result.data as Player[]);
    this._router.navigate(['/tabs/game']);
  }

  newGame() {
    this.presentModal();
  }
}
