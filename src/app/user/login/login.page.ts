// Importa firstValueFrom de RxJS
import { firstValueFrom } from 'rxjs';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

interface LoginResponse {
  success: boolean;
  message: string;
  usuario?: {
    usuarioid: number;
    username: string;
    email: string;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private menu: MenuController,
    private dataService: DataService
  ) {
    this.menu.enable(false);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  async login(form: NgForm) {
    if (!this.email.trim() || !this.password.trim()) {
      this.presentAlert('Campos Obligatorios', 'Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (!this.email.endsWith('@utm.edu.ec')) {
      this.presentAlert('Error', 'Estimado usuario, usted está tratando de acceder al sistema con una dirección de correo inválida, solo se aceptan correos terminados en @utm.edu.ec, revise sus datos de acceso');
      return;
    }

    try {
      // Usamos firstValueFrom aquí para convertir el Observable a Promise
      const response: LoginResponse = await this.dataService.login(this.email, this.password);
      if (!response.success) {
        this.presentAlert('Error', response.message);
        return;
      }

      if (response.usuario) {
        localStorage.setItem('session', response.usuario.usuarioid.toString());
        this.router.navigateByUrl('/inicio');
      } else {
        this.presentAlert('Error', 'No se pudo obtener la información del usuario.');
      }
    } catch (error) {
      let message = 'Ocurrió un error desconocido';
      if (error instanceof Error) {
        message = error.message;
      }
      this.presentAlert('Error', message);
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
