import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoiraDellaTorreMusicPage } from './moira-della-torre-music.page';

const routes: Routes = [
  {
    path: '',
    component: MoiraDellaTorreMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoiraDellaTorreMusicPageRoutingModule {}
