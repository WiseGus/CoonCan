import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { GameSessionService } from '../game-session.service';
import { EndRoundPage } from './end-round/end-round.page';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss']
})
export class GamePage implements OnInit {

  constructor(
    private _modalController: ModalController,
    public gameSession: GameSessionService) {
  }

  ngOnInit(): void {
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

  async endRound() {
    const modal = await this._modalController.create({
      component: EndRoundPage
    });
    await modal.present();
    await modal.onDidDismiss();
  }
}
