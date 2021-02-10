import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IBelongtotheZooPageRoutingModule } from './ibelongtothe-zoo-routing.module';

import { IBelongtotheZooPage } from './ibelongtothe-zoo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IBelongtotheZooPageRoutingModule
  ],
  declarations: [IBelongtotheZooPage]
})
export class IBelongtotheZooPageModule {}
