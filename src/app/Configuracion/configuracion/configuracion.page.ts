import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {
  tema: string;
  idioma: string;
  notificaciones: boolean;
  fotoPerfil: string;

  @ViewChild('fileInput', { static: false }) 
  fileInput!: ElementRef<HTMLInputElement>;
  authService: any;

  constructor(private router: Router, private alertController: AlertController) {
    // Inicializar las configuraciones
    this.tema = 'light';
    this.idioma = 'es';
    this.notificaciones = true;
    this.fotoPerfil = 'assets/default-profile-image.jpg'; // Ruta de la foto de perfil por defecto
  }

  ngAfterViewInit() {
    if (this.fileInput && this.fileInput.nativeElement) {
      // Aquí puedes realizar cualquier lógica adicional que necesites
    }
  }
  
  cambiarTema() {
    // Modificar la variable 'tema' según el tema seleccionado
    this.tema = this.tema === 'light' ? 'dark' : 'light';
    
    // Modificar las clases CSS del documento HTML y otros elementos según el tema seleccionado
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (this.tema === 'light') {
      htmlElement.classList.remove('dark-theme');
      htmlElement.classList.add('light-theme');
      bodyElement.classList.remove('dark-theme');
      bodyElement.classList.add('light-theme');
      
      // Aquí puedes recorrer y modificar las clases de los elementos y componentes
      // específicos de tu aplicación para cambiar a tema claro
    } else {
      htmlElement.classList.remove('light-theme');
      htmlElement.classList.add('dark-theme');
      bodyElement.classList.remove('light-theme');
      bodyElement.classList.add('dark-theme');
      
      // Aquí puedes recorrer y modificar las clases de los elementos y componentes
      // específicos de tu aplicación para cambiar a tema oscuro
    }
  }
  
  

  cambiarContrasena() {
    // Implementa la lógica para cambiar la contraseña
  }

  async abrirConfiguracionPrivacidad() {
    const alert = await this.alertController.create({
      header: 'Configuración de Privacidad',
      message: 'Aquí puedes configurar tus opciones de privacidad.',
      inputs: [
        {
          name: 'idioma',
          type: 'radio',
          label: 'Español',
          value: 'es',
          checked: this.idioma === 'es',
        },
        {
          name: 'idioma',
          type: 'radio',
          label: 'Inglés',
          value: 'en',
          checked: this.idioma === 'en',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          },
        },
        {
          text: 'Guardar',
          handler: (data) => {
            console.log('Guardado', data);
  
            // Actualizar la configuración de privacidad en función de los valores seleccionados
            if (data.idioma) {
              this.idioma = data.idioma;
  
              // Aquí puedes implementar la lógica para cambiar el idioma de la aplicación
              // Por ejemplo, puedes usar servicios de traducción o cambiar el idioma de la interfaz de usuario.
            }
          },
        },
      ],
    });
  
    await alert.present();
  }
  
    

  eliminarCuenta() {
    // Implementa la lógica para eliminar la cuenta
  }

  async cerrarSesion() {
    await this.presentConfirmAlert();
  }

  async presentConfirmAlert() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Aceptar');
            // Realiza cualquier lógica necesaria para cerrar sesión, como limpiar los datos de usuario, eliminar tokens, etc.

            // Redirecciona a la página de inicio de sesión
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
    
  cambiarFotoPerfil() {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click();
    } else {
      console.log('fileInput is null or nativeElement is null');
    }
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.fotoPerfil = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  miServicioCambiarContrasena(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Simulación de una operación de cambio de contraseña con un retraso de 2 segundos
      setTimeout(() => {
        // Implementa la lógica real para cambiar la contraseña
        resolve();
      }, 2000);
    });
  }

  miServicioEliminarCuenta(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Simulación de una operación de eliminación de cuenta con un retraso de 2 segundos
      setTimeout(() => {
        // Implementa la lógica real para eliminar la cuenta
        resolve();
      }, 2000);
    });
  }
}
