import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage
  },
  {
    path: 'benand-ben-music',
    loadChildren: () => import('./benand-ben-music/benand-ben-music.module').then( m => m.BenandBenMusicPageModule)
  },
  {
    path: 'december-avenue-music',
    loadChildren: () => import('./december-avenue-music/december-avenue-music.module').then( m => m.DecemberAvenueMusicPageModule)
  },
  {
    path: 'ed-sheeran-music',
    loadChildren: () => import('./ed-sheeran-music/ed-sheeran-music.module').then( m => m.EdSheeranMusicPageModule)
  },
  {
    path: 'ibelongtothe-zoo-music',
    loadChildren: () => import('./ibelongtothe-zoo-music/ibelongtothe-zoo-music.module').then( m => m.IBelongtotheZooMusicPageModule)
  },
  {
    path: 'moira-della-torre-music',
    loadChildren: () => import('./moira-della-torre-music/moira-della-torre-music.module').then( m => m.MoiraDellaTorreMusicPageModule)
  },
  {
    path: 'olivia-rodrigo-music',
    loadChildren: () => import('./olivia-rodrigo-music/olivia-rodrigo-music.module').then( m => m.OliviaRodrigoMusicPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule {}
