import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenandBenMusicPageRoutingModule } from './benand-ben-music-routing.module';

import { BenandBenMusicPage } from './benand-ben-music.page';
import { SharedModule } from 'src/app/module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenandBenMusicPageRoutingModule,
    SharedModule,
  ],
  declarations: [BenandBenMusicPage]
})
export class BenandBenMusicPageModule {}
