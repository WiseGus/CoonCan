import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: '../main-menu/main-menu.module#MainMenuPageModule'
          }
        ]
      },
      {
        path: 'game',
        loadChildren: '../game/game.module#GamePageModule'
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: '../history/history.module#HistoryPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
