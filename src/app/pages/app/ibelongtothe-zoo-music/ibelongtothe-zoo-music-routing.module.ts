import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IBelongtotheZooMusicPage } from './ibelongtothe-zoo-music.page';

const routes: Routes = [
  {
    path: '',
    component: IBelongtotheZooMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IBelongtotheZooMusicPageRoutingModule {}
