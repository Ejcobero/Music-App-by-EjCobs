import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecemberAvenuePageRoutingModule } from './december-avenue-routing.module';

import { DecemberAvenuePage } from './december-avenue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecemberAvenuePageRoutingModule
  ],
  declarations: [DecemberAvenuePage]
})
export class DecemberAvenuePageModule {}
