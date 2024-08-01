import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  primeraEntrada: string = localStorage.getItem('primeraEntrada') ?? '';
;
  constructor(private menu: MenuController,) {
    menu.enable(true)
  
  }
  ngOnInit() {
    localStorage.setItem('primeraEntrada','ok') 
  }
 

}
