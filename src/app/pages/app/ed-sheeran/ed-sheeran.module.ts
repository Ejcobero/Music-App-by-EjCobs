import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdSheeranPageRoutingModule } from './ed-sheeran-routing.module';

import { EdSheeranPage } from './ed-sheeran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdSheeranPageRoutingModule
  ],
  declarations: [EdSheeranPage]
})
export class EdSheeranPageModule {}
