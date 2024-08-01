import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdPacientePageRoutingModule } from './upd-paciente-routing.module';

import { UpdPacientePage } from './upd-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdPacientePageRoutingModule
  ],
  declarations: [UpdPacientePage]
})
export class UpdPacientePageModule {}
