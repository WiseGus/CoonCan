import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Player } from 'src/app/player';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})
export class NewGamePage implements OnInit {

  players: Player[] = [];

  constructor(public modal: ModalController) {
    this.newPlayer();
  }

  ngOnInit() {

  }

  addPlayer() {
    this.newPlayer();
  }

  removePlayer(no: number) {
    this.players.splice(no, 1);
  }

  back() {
    this.modal.dismiss(null);
  }

  ready() {
    this.modal.dismiss(this.players);
  }

  private newPlayer() {
    this.players.push({
      name: `Player ${this.players.length + 1}`,
      points: 20,
      hats: 0
    });
  }
}
