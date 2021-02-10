import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdSheeranMusicPage } from './ed-sheeran-music.page';

const routes: Routes = [
  {
    path: '',
    component: EdSheeranMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdSheeranMusicPageRoutingModule {}
