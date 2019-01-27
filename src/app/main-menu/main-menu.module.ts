import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MainMenuPage } from './main-menu.page';
import { NewGamePage } from './new-game/new-game.page';
import { MainMenuEffects } from './state/main-menu.effects';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MainMenuPage }]),
    StoreModule.forFeature('mainmenu', {}),
    EffectsModule.forFeature([MainMenuEffects]),
  ],
  declarations: [MainMenuPage, NewGamePage],
  entryComponents: [NewGamePage]
})
export class MainMenuPageModule { }
