import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdSheeranMusicPageRoutingModule } from './ed-sheeran-music-routing.module';

import { EdSheeranMusicPage } from './ed-sheeran-music.page';
import { SharedModule } from 'src/app/module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdSheeranMusicPageRoutingModule,
    SharedModule,
  ],
  declarations: [EdSheeranMusicPage]
})
export class EdSheeranMusicPageModule {}
