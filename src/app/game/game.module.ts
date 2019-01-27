import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { EndRoundPage } from './end-round/end-round.page';
import { GamePage } from './game.page';
import { GameEffects } from './state/game.effects';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GamePage }]),
    StoreModule.forFeature('game', {}),
    EffectsModule.forFeature([GameEffects]),
  ],
  declarations: [GamePage, EndRoundPage],
  entryComponents: [EndRoundPage]
})
export class GamePageModule { }
