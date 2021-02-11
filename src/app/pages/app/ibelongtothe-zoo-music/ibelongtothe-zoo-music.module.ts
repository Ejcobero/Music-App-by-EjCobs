import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IBelongtotheZooMusicPageRoutingModule } from './ibelongtothe-zoo-music-routing.module';

import { IBelongtotheZooMusicPage } from './ibelongtothe-zoo-music.page';
import { SharedModule } from 'src/app/module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IBelongtotheZooMusicPageRoutingModule,
    SharedModule,
  ],
  declarations: [IBelongtotheZooMusicPage]
})
export class IBelongtotheZooMusicPageModule {}
