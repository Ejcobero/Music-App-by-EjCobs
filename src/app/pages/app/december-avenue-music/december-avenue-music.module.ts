import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecemberAvenueMusicPageRoutingModule } from './december-avenue-music-routing.module';

import { DecemberAvenueMusicPage } from './december-avenue-music.page';
import { SharedModule } from 'src/app/module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecemberAvenueMusicPageRoutingModule,
    SharedModule,
  ],
  declarations: [DecemberAvenueMusicPage]
})
export class DecemberAvenueMusicPageModule {}
