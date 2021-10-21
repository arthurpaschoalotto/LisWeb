import { MostrarpacienteComponent } from './mostrarpaciente/mostrarpaciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ListainterfaceamentosComponent } from './cadastrointerfaceamento/listainterfaceamentos/listainterfaceamentos.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TipoinstrumentoComponent } from './tipoinstrumento/tipoinstrumento.component';
import { cadastrointerfaceamento } from './cadastrointerfaceamento/cadastrointerfaceamento.component';
import { ModuleWithProviders } from '@angular/core';
import { CadastropacienteComponent } from './cadastropaciente/cadastropaciente.component';

const routes: Routes = [
  {path: 'recepcao/pacientes', component:PacientesComponent},
  {path:'recepcao/pacientes/novo', component:CadastropacienteComponent}, //estudar children
  {path: 'recepcao/cadastro', component:cadastrointerfaceamento},
  {path:'recepcao/pacientes/edit/:id', component:CadastropacienteComponent},
  {path:'recepcao/pacientes/show/:id', component:MostrarpacienteComponent},
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
