import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoiraDelaTorrePage } from './moira-dela-torre.page';

const routes: Routes = [
  {
    path: '',
    component: MoiraDelaTorrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoiraDelaTorrePageRoutingModule {}
