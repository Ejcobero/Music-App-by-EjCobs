import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoiraDellaTorreMusicPageRoutingModule } from './moira-della-torre-music-routing.module';

import { MoiraDellaTorreMusicPage } from './moira-della-torre-music.page';
import { SharedModule } from 'src/app/module/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoiraDellaTorreMusicPageRoutingModule,
    SharedModule,
  ],
  declarations: [MoiraDellaTorreMusicPage]
})
export class MoiraDellaTorreMusicPageModule {}
