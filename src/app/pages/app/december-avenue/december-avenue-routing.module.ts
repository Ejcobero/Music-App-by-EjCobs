import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecemberAvenuePage } from './december-avenue.page';

const routes: Routes = [
  {
    path: '',
    component: DecemberAvenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecemberAvenuePageRoutingModule {}
