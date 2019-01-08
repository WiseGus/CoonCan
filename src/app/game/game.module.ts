import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EndRoundPage } from './end-round/end-round.page';
import { GamePage } from './game.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: GamePage }])
  ],
  declarations: [GamePage, EndRoundPage],
  entryComponents: [EndRoundPage]
})
export class GamePageModule { }
