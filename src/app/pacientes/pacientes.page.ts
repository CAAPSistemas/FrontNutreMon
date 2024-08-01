import { Component, OnInit } from '@angular/core';
import { DataService, PacienteDto } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {

  pacientes: PacienteDto[] = [];
  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) { }


  async ngOnInit() {
    const data = await this.dataService.getPacientes();
    this.pacientes = data;
    this.route.params.subscribe(async params => {
      const data = await this.dataService.getPacientes();
      this.pacientes = data;
    });
  }

  async itemSelect(id: number) {
    await this.router.navigateByUrl('/consultas/' + id, { skipLocationChange: false });
  }
  reloadPage() {
    window.location.reload()
  }
  ngDoCheck() {
  }

  async ngOnDestroy() {
    console.log("Destroy");
  }

  async selectPatients(paciente: PacienteDto, opt: string) {
    if (opt === 'DEL') {
      await this.deletePatients(paciente.id);
    } else
      this.router.navigate(["upd-paciente/" + paciente.id, { cliente: JSON.stringify(paciente) }]);
  }


  async deletePatients(id: number) {
    try {
      const response = await this.dataService.deletePacientes(id);
      const data = await this.dataService.getPacientes();
      this.pacientes = data;
      this.presentAlert('Información', response.mensaje);
    } catch (error) {
      this.presentAlert('Error', 'Falló la activación de usuario');

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
