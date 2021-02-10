import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OliviaRodrigoPageRoutingModule } from './olivia-rodrigo-routing.module';

import { OliviaRodrigoPage } from './olivia-rodrigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OliviaRodrigoPageRoutingModule
  ],
  declarations: [OliviaRodrigoPage]
})
export class OliviaRodrigoPageModule {}
