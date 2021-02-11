import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OliviaRodrigoMusicPageRoutingModule } from './olivia-rodrigo-music-routing.module';

import { OliviaRodrigoMusicPage } from './olivia-rodrigo-music.page';
import { SharedModule } from 'src/app/module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OliviaRodrigoMusicPageRoutingModule,
    SharedModule,
  ],
  declarations: [OliviaRodrigoMusicPage]
})
export class OliviaRodrigoMusicPageModule {}
