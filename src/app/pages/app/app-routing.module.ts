import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage
  },
  {
    path: 'benand-ben',
    loadChildren: () => import('../App/benand-ben/benand-ben.module').then( m => m.BenandBenPageModule)
  },
  {
    path: 'december-avenue',
    loadChildren: () => import('../App/december-avenue/december-avenue.module').then( m => m.DecemberAvenuePageModule)
  },
  {
    path: 'ed-sheeran',
    loadChildren: () => import('../App/ed-sheeran/ed-sheeran.module').then( m => m.EdSheeranPageModule)
  },
  {
    path: 'ibelongtothe-zoo',
    loadChildren: () => import('../App/ibelongtothe-zoo/ibelongtothe-zoo.module').then( m => m.IBelongtotheZooPageModule)
  },
  {
    path: 'moira-dela-torre',
    loadChildren: () => import('../App/moira-dela-torre/moira-dela-torre.module').then( m => m.MoiraDelaTorrePageModule)
  },
  {
    path: 'olivia-rodrigo',
    loadChildren: () => import('../App/olivia-rodrigo/olivia-rodrigo.module').then( m => m.OliviaRodrigoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../App/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule {}
