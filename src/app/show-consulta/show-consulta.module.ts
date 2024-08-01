import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowConsultaPageRoutingModule } from './show-consulta-routing.module';

import { ShowConsultaPage } from './show-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowConsultaPageRoutingModule
  ],
  declarations: [ShowConsultaPage]
})
export class ShowConsultaPageModule {}
