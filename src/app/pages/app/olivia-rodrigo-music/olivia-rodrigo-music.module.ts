import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OliviaRodrigoMusicPageRoutingModule } from './olivia-rodrigo-music-routing.module';

import { OliviaRodrigoMusicPage } from './olivia-rodrigo-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OliviaRodrigoMusicPageRoutingModule
  ],
  declarations: [OliviaRodrigoMusicPage]
})
export class OliviaRodrigoMusicPageModule {}
