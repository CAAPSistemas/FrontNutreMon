import { Component, OnInit } from '@angular/core';
import { DataService, PacienteDto } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-upd-paciente',
  templateUrl: './upd-paciente.page.html',
  styleUrls: ['./upd-paciente.page.scss'],
})
export class UpdPacientePage implements OnInit {
  nombre: string = "";
  apellidos: string = "";
  cedula: string = "";
  edad: number = 0;
  sexo: string = "";
  id!: number;
  constructor(
    private readonly dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.id = params['id'];
      const paciente = JSON.parse(params['cliente']) as PacienteDto;
      setTimeout(() => {
        this.nombre = paciente.nombre;
        this.apellidos = paciente.apellidos;
        this.cedula = paciente.cedula;
        this.edad = paciente.edad;
        this.sexo = paciente.sexo.charAt(0).toUpperCase() + paciente.sexo.slice(1);
      });
    });
  }

  async updPaciente() {
    if (this.nombre != "" || this.apellidos != "" || this.cedula != "" || this.edad != 0 || this.sexo != "") {
      if (this.edad < 1 || this.edad > 120) {
        this.presentAlert('Error, Verifique la edad', 'Debe de ser un número mayor que 1 y menor que 120');
        return;
      }
      const pacienteDto: PacienteDto = {
        id: this.id,
        nombre: this.nombre,
        apellidos: this.apellidos,
        cedula: this.cedula,
        edad: this.edad,
        sexo: this.sexo
      }
      try {
        const result = await this.dataService.updatePacientes(this.id, pacienteDto);
        this.presentAlert('Información', 'El paciente ha sido modificado satisfactoriamente');
        this.router.navigateByUrl('/pacientes');

      } catch (error) {

      }
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
