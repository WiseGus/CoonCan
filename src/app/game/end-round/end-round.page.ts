import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameSessionService } from 'src/app/game-session.service';

import { Player } from '../../player';

@Component({
  selector: 'app-end-round',
  templateUrl: './end-round.page.html',
  styleUrls: ['./end-round.page.scss'],
})
export class EndRoundPage implements OnInit {

  roundPlayerPoints: Player[] = [];

  constructor(
    private _modalController: ModalController,
    public gameSession: GameSessionService) {
  }

  ngOnInit() {
    this.gameSession.players$.subscribe(players => {
      this.roundPlayerPoints = JSON.parse(JSON.stringify(players));
      this.roundPlayerPoints.forEach(p => p.points = 0);
    });
  }

  cancel() {
    this.closeModal();
  }

  ok() {
    this.gameSession.endRound(this.roundPlayerPoints);
    this.closeModal();
  }

  private closeModal() {
    this._modalController.dismiss();
  }
}
