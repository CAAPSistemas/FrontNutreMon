import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowConsultaPage } from './show-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: ShowConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowConsultaPageRoutingModule {}
