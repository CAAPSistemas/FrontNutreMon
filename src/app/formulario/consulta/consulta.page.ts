import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage {
  datos: any = {};
  id: number = 0;
  numero: number = 0;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  guardar() {
    this.mostrarConfirmacion();
  }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      console.log(params);
      this.id = params['id'];
      if (!this.id) return;
      const data = JSON.parse(localStorage.getItem("pacienteId" + this.id)!);
      this.datos.nombre = data.nombre;
      this.datos.apellidos = data.apellidos;
      this.datos.cedula = data.cedula;
      this.datos.edad = data.edad;
      this.datos.sexo = data.sexo;
    });
  }
  async mostrarConfirmacion() {
    if (this.datos.edad < 1 || this.datos.edad > 120) {
      this.mostrarAlerta('Error, Verifique la edad', 'Debe de ser un número mayor que 1 y menor que 120');
      return;
    }
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Deseas enviar los datos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Enviar',
          handler: () => {
            this.enviarDatos();
          },
        },
      ],
    });

    await alert.present();
  }

  async enviarDatos() {
    try {
      // Guarda los datos en el localStorage
      const data = await this.dataService.guardarConsulta(this.datos);
      localStorage.setItem('consultaData', JSON.stringify(data));
      // Mostrar una alerta de éxito
      if (data.pacienteEncontrado === 'true')
        await this.mostrarAlerta('Éxito', 'La consulta se ha guardado correctamente.');
      else
        await this.mostrarAlerta('Éxito', 'La consulta se ha guardado correctamente, se ha creado además un nuevo paciente con los datos de la persona proporcionados ');
      // Redireccionar a la página de resultados
      this.router.navigate(['/resultados']);
    } catch (error) {
      console.error('Error al guardar la consulta:', error);
      // Mostrar una alerta de error
      await this.mostrarAlerta('Error', 'Ocurrió un error al guardar la consulta.');
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alerta = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alerta.present();
  }
}
