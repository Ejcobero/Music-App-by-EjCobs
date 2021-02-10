import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OliviaRodrigoPage } from './olivia-rodrigo.page';

const routes: Routes = [
  {
    path: '',
    component: OliviaRodrigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OliviaRodrigoPageRoutingModule {}
