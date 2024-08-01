import { Component, OnInit } from '@angular/core';
import { DataService, PacienteDto } from '../services/data.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.page.html',
  styleUrls: ['./add-paciente.page.scss'],
})
export class AddPacientePage implements OnInit {
  nombre: string = "";
  apellidos: string = "";
  cedula: string = "";
  edad: number = 0;
  sexo: string = "";
  // edadRege=
  constructor(
    private readonly dataService: DataService,
    private router: Router,
    private alertController: AlertController,
    private location: Location
  ) { }

  ngOnInit() {
  }

  async addPaciente() {
    if (this.nombre != "" || this.apellidos != "" || this.cedula != "" || this.edad != 0 || this.sexo != "") {
      if (this.edad < 1 || this.edad > 120) {
        this.presentAlert('Error, Verifique la edad', 'Debe de ser un número mayor que 1 y menor que 120');
        return;
      }
      const pacienteDto: PacienteDto = {
        id: 0,
        nombre: this.nombre,
        apellidos: this.apellidos,
        cedula: this.cedula,
        edad: this.edad,
        sexo: this.sexo
      }
      try {
        const result = await this.dataService.addPacientes(pacienteDto);
        if (result.success) {
          this.presentAlert('Información', 'El paciente ha sido adicionado satisfactoriamente, usted puede agregarle las consultas pertinentes haciendo click sobre el ícono ver detalles.');
          this.location.back();
        }
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
