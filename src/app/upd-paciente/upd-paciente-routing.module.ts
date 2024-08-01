import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdPacientePage } from './upd-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: UpdPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdPacientePageRoutingModule {}
