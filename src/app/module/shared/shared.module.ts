import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BenandBenComponent } from "src/app/components/Music/benand-ben/benand-ben.component";
import { DecemberAvenueComponent } from "src/app/components/Music/december-avenue/december-avenue.component";
import { EdSheeranComponent } from "src/app/components/Music/ed-sheeran/ed-sheeran.component";
import { IBelongtotheZooComponent } from "src/app/components/Music/ibelongtothe-zoo/ibelongtothe-zoo.component";
import { MoiraDelaTorreComponent } from "src/app/components/Music/moira-dela-torre/moira-dela-torre.component";
import { OliviaRodrigoComponent } from "src/app/components/Music/olivia-rodrigo/olivia-rodrigo.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,

  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,


    /** nmusic components */
    BenandBenComponent,
    DecemberAvenueComponent,
    EdSheeranComponent,
    IBelongtotheZooComponent,
    MoiraDelaTorreComponent,
    OliviaRodrigoComponent,

  ],

  /** App Components */
  declarations: [

  /** music components */
    BenandBenComponent,
    DecemberAvenueComponent,
    EdSheeranComponent,
    IBelongtotheZooComponent,
    MoiraDelaTorreComponent,
    OliviaRodrigoComponent,

  ],
})
export class SharedModule {}
