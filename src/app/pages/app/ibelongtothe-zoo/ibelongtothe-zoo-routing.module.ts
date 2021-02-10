import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IBelongtotheZooPage } from './ibelongtothe-zoo.page';

const routes: Routes = [
  {
    path: '',
    component: IBelongtotheZooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IBelongtotheZooPageRoutingModule {}
