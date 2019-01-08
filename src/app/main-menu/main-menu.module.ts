import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MainMenuPage } from './main-menu.page';
import { NewGamePage } from './new-game/new-game.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MainMenuPage }])
  ],
  declarations: [MainMenuPage, NewGamePage],
  entryComponents: [NewGamePage]
})
export class MainMenuPageModule { }
