import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecemberAvenueMusicPage } from './december-avenue-music.page';

const routes: Routes = [
  {
    path: '',
    component: DecemberAvenueMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecemberAvenueMusicPageRoutingModule {}
