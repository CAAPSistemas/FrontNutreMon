import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from './services/data.service';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Pacientes', url: 'pacientes', icon: 'person' },
    { title: 'Consultas', url: 'consulta', icon: 'document' },
    { title: 'Opciones', url: 'configuracion', icon: 'settings' },
  ];
  public labels = ['Version: 0.0.1'];
  darkMode: boolean = true;

  usuario: { name: string, email: string } | null;


  constructor(private dataService: DataService, private modalController: ModalController, private router: Router) {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === '/inicio') {
          console.log('Navegación a la ruta específica detectada');
          const session = localStorage.getItem('session');
          if (session) {

            this.dataService.getData(+session).then(
              data => {
                this.usuario = { name: data.nombre, email: data.email }
                router.navigate(["/inicio"])

              }
            ).catch(error => {
              console.log(error)
            });
            console.log("Primero que todo");
          } else {
            router.navigate(["/login"])
          }
          // Realiza acciones específicas cuando se navega a la ruta deseada
        }
      }
    });



    // Recuperar los datos del usuario desde localStorage
    const registroTokensGuardados = localStorage.getItem('registrationTokens');

    if (registroTokensGuardados) {
      const registroTokens = JSON.parse(registroTokensGuardados);
      this.usuario = {
        name: registroTokens.name || '',
        email: registroTokens.email || '',
      };
    } else {
      this.usuario = null;
    }
  }




  async abrirFormulario() {
    const modal = await this.modalController.create({
      component: 'formulario-modal', // Utiliza el nombre del componente modal que deseas abrir
      cssClass: 'formulario-modal',
    });
    return await modal.present();
  }

  cerrarFormulario() {
    this.modalController.dismiss();
  }

  guardar() {
    // Lógica para guardar los datos del formulario
    this.cerrarFormulario();
  }
  change() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark)
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');

  }
}
