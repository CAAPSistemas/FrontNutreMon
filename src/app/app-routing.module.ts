import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./formulario/consulta/consulta.module').then(m => m.ConsultaPageModule)
  },
  {
    path: 'consulta/:id',
    loadChildren: () => import('./formulario/consulta/consulta.module').then(m => m.ConsultaPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./formulario/resultados/resultados.module').then(m => m.ResultadosPageModule)
  },
  {
    path: 'resultados/:id',
    loadChildren: () => import('./formulario/resultados/resultados.module').then(m => m.ResultadosPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./Configuracion/configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pacientes/pacientes.module').then(m => m.PacientesPageModule)
  },
  {
    path: 'add-paciente',
    loadChildren: () => import('./add-paciente/add-paciente.module').then(m => m.AddPacientePageModule)
  },
  {
    path: 'consultas/:id',
    loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasPageModule)
  },
  {
    path: 'show-consulta/:id',
    loadChildren: () => import('./show-consulta/show-consulta.module').then(m => m.ShowConsultaPageModule)
  },
  {
    path: 'upd-paciente/:id',
    loadChildren: () => import('./upd-paciente/upd-paciente.module').then(m => m.UpdPacientePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
