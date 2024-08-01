import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from '../services/data.service';

@Component({
  selector: 'app-show-consulta',
  templateUrl: './show-consulta.page.html',
  styleUrls: ['./show-consulta.page.scss'],
})
export class ShowConsultaPage implements OnInit {
  consulta:Consultation = {};
  id: number =0 ;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {     
      this.id = params['id'];    
      const idconsulta=params['idconsulta'];         
      const consultas = JSON.parse(localStorage.getItem("pacienteId"+this.id)!) as Consultation[];      
      this.consulta = consultas.find(c => c.medicionid == idconsulta)!;
    });
  }
  showResult(){
    localStorage.setItem('pacienteData', JSON.stringify({
      nombre: this.consulta.nombre,
      apellidos: this.consulta.apellidos,
      edad: this.consulta.edad,
      sexo: this.consulta.sexo,
      cedula: this.consulta.cedula
    }));
    this.router.navigate(['resultados/'+this.consulta.medicionid]);
  }
  ngOnDestroy() {
    localStorage.removeItem("pacienteId"+this.id);
  }
}
