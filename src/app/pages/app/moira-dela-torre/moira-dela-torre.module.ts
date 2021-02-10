import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoiraDelaTorrePageRoutingModule } from './moira-dela-torre-routing.module';

import { MoiraDelaTorrePage } from './moira-dela-torre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoiraDelaTorrePageRoutingModule
  ],
  declarations: [MoiraDelaTorrePage]
})
export class MoiraDelaTorrePageModule {}
