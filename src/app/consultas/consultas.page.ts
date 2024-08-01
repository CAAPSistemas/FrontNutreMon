import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation, DataService, PacienteDto } from '../services/data.service';
import { ColorComparacion, Comportamiento, EstadoComparacion, datosConsulta } from '../utils/comparison';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})

 
export class ConsultasPage implements OnInit {
  consultas:Consultation[] = [];
  id:number = 0;
  enumEstadoComparacion=EstadoComparacion
  comportamiento:Comportamiento[]=[]
  constructor(private route: ActivatedRoute,
    private readonly dataService: DataService, private readonly router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.id = params['id'];
      localStorage.removeItem("pacienteId"+this.id);
      this.consultas = await this.dataService.getConsultationByPatient(this.id);
     
      this.consultas = this.consultas.map(c => ({...c,fechamedicion:c.fechamedicion!.substring(0,10)}))    
      if (this.consultas.length>1)
        this.doComparison();     
    });
  }
  doComparison (){
      let longitudArray=this.consultas.length;  
      this.comportamiento=datosConsulta.map((valor)=>{        
        let {um}=valor
        const valorAct = Number(this.consultas[longitudArray - 1][valor.llave])
        const valorAnt = Number(this.consultas[longitudArray - 2][valor.llave])
         let resultado=  valorAct -valorAnt 
          if (Math.sign(resultado)===1){
            return { llave: valor.name, valorAnt,valorAct, nombre:EstadoComparacion.aum,color:ColorComparacion.danger,valor: Math.abs(resultado),um}              
          }else if (Math.sign(resultado)===-1){
            return { llave: valor.name, valorAnt,valorAct, nombre:EstadoComparacion.dism,color:ColorComparacion.success,valor: Math.abs(resultado),um}
          }else
            return { llave: valor.name, valorAnt,valorAct, nombre:EstadoComparacion.notc,color:ColorComparacion.primary,valor: Math.abs(resultado),um}
      })           
  }
  async goToConsult(consulta:Consultation){     
    localStorage.setItem("pacienteId"+this.id,JSON.stringify(this.consultas));
    this.router.navigate(["show-consulta/"+this.id,{idconsulta:consulta.medicionid}]);
  }

  async addConsult(){
    console.log(this.consultas)
    if (this.consultas.length == 0) {
      const pacientes = await this.dataService.getPacientes();
      const paciente = pacientes.find(p => p.id == this.id) as PacienteDto ;
      localStorage.setItem("pacienteId" + this.id, JSON.stringify(
        {
          nombre: paciente.nombre,
          apellidos: paciente.apellidos,
          cedula: paciente.cedula,
          edad:paciente.edad,
          sexo:paciente.sexo
        }));
        console.log(paciente)
      this.router.navigate(["consulta/"+this.id]);
     
      return;
    }
    localStorage.setItem("pacienteId" + this.id, JSON.stringify(
      {
        nombre: this.consultas[0].nombre!,
        apellidos: this.consultas[0].apellidos,
        cedula: this.consultas[0].cedula,
        edad:this.consultas[0].edad,
        sexo:this.consultas[0].sexo
      }));
    this.router.navigate(["consulta/"+this.id]);
  }

}
