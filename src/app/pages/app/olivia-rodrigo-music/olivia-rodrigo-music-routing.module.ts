import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OliviaRodrigoMusicPage } from './olivia-rodrigo-music.page';

const routes: Routes = [
  {
    path: '',
    component: OliviaRodrigoMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OliviaRodrigoMusicPageRoutingModule {}
