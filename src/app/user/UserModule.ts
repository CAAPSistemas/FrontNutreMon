// user.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
   
    // RegisterPage, // Si también lo utilizas, agrégalo aquí
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    
    // RegisterPage, // Si también lo utilizas, agrégalo aquí
  ],
})
export class UserModule {}
