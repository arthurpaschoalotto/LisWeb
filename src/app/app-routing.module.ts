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
  {path: 'pacientes', component:PacientesComponent},
  {path: 'cadastro', component:cadastrointerfaceamento},
  {path: 'cadastropaciente', component:CadastropacienteComponent}
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
