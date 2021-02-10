import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenandBenPage } from './benand-ben.page';

const routes: Routes = [
  {
    path: '',
    component: BenandBenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenandBenPageRoutingModule {}
