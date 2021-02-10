import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenandBenPageRoutingModule } from './benand-ben-routing.module';

import { BenandBenPage } from './benand-ben.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenandBenPageRoutingModule
  ],
  declarations: [BenandBenPage]
})
export class BenandBenPageModule {}
