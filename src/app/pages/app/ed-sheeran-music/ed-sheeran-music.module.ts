import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdSheeranMusicPageRoutingModule } from './ed-sheeran-music-routing.module';

import { EdSheeranMusicPage } from './ed-sheeran-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdSheeranMusicPageRoutingModule
  ],
  declarations: [EdSheeranMusicPage]
})
export class EdSheeranMusicPageModule {}
