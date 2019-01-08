import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Player } from './player';


@Injectable({
  providedIn: 'root'
})
export class GameSessionService {
  players$: Observable<Player[]>;
  sessionNo$: Observable<number>;
  round$: Observable<number>;

  private _players$ = new BehaviorSubject(null);
  private _sessionNo$ = new BehaviorSubject(0);
  private _round$ = new BehaviorSubject(0);

  private _players: Player[];
  private _sessionNo = 0;
  private _round = 0;

  constructor() {
    this.players$ = this._players$.asObservable();
    this.sessionNo$ = this._sessionNo$.asObservable();
    this.round$ = this._round$.asObservable();
  }

  newGameSession(players: Player[]) {
    console.log('new game', players);

    this._sessionNo++;
    this._round++;
    this._players = players;

    this._players$.next(this._players);
    this._sessionNo$.next(this._sessionNo);
    this._round$.next(this._round);
  }

  endRound(playersEOR: Player[]) {
    this._players.forEach(player => {
      player.points += playersEOR.find(p => p.name === player.name).points;

      if (player.points > 100) {
        const maxPoints = Math.max(...this._players.filter(p => p.name !== player.name).map(p => p.points));
        player.points = maxPoints;

        player.hats++;
      }
    });
    this._round++;
    this._round$.next(this._round);
  }
}
