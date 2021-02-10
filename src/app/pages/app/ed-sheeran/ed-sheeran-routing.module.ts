import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdSheeranPage } from './ed-sheeran.page';

const routes: Routes = [
  {
    path: '',
    component: EdSheeranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdSheeranPageRoutingModule {}
