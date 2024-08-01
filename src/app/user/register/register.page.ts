import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  confirm: string = '';

  constructor(
    private router: Router,
    private menu: MenuController,
    private httpClient: HttpClient,
    private DataService: DataService,
    private alertController: AlertController,

  ) {
    // Desactivar la barra lateral en esta página
    this.menu.enable(false);
  }

  ngOnInit(): void {
    // Puedes realizar alguna lógica aquí si es necesario
  }

  register(form: NgForm) {
    const password = form.controls['password'].value as string;
    const confirmPassword = form.controls['confirm'].value as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/


    if (!passwordRegex.test(form.controls['password'].value)) {
      this.presentAlert('Error', 'La contraseña debe de tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un caracter especial y un número');
      return;
    }
    if (!emailRegex.test(form.controls['email'].value)) {
      this.presentAlert('Error', 'Escriba una dirección de correo válida ');
      return;
    }
    if (!form.controls['email'].value.endsWith('@utm.edu.ec')) {
      this.presentAlert('Error', 'Solo se aceptan correos de @utm.edu.ec');
      return;
    }
    if (form.valid && (password === confirmPassword)) {

      const registrationData = {
        name: form.controls['name'].value,
        email: form.controls['email'].value,
        password: form.controls['password'].value,
      };

      // Realizar una solicitud POST al servidor
      //this.httpClient.post('http://localhost:8080/api/register', registrationData)
      //this.httpClient.post('https://lrbk6lk2-8080.use.devtunnels.ms/api/register', registrationData)
      this.httpClient.post('https://sq5174dw-8080.use2.devtunnels.ms/api/register', registrationData)
        .subscribe(
          (response: any) => {
            // Registro exitoso, puedes manejar la respuesta aquí
            console.log('Respuesta del servidor:', response);

            // Guardar el token en localStorage
            localStorage.setItem('authToken', "response.token");

            // Redirigir a la página de inicio
            this.router.navigate(['/login']);
          },
          (error: any) => {
            // Manejar errores de la solicitud
            console.error('Error en la solicitud HTTP:', error);
            // Puedes mostrar una alerta al usuario aquí
          }
        );
    } else if (password !== confirmPassword) {
      this.presentAlert('Error', 'Las contraseñas no coinciden.');
    } else {
      this.presentAlert('Por favor', 'completa todos los campos requeridos.');
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
  generateUniqueToken(): string {
    // Aquí puedes implementar la lógica para generar un token único, por ejemplo, utilizando una biblioteca como 'uuid'.
    // Por ahora, generaremos un token simple basado en la hora actual.
    const timestamp = new Date().getTime();
    return `token_${timestamp}`;
  }
}
