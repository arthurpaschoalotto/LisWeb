import { ListainterfaceamentosComponent } from './cadastrointerfaceamento/listainterfaceamentos/listainterfaceamentos.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TipoinstrumentoComponent } from './tipoinstrumento/tipoinstrumento.component';
import { cadastrointerfaceamento } from './cadastrointerfaceamento/cadastrointerfaceamento.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {path: 'lista', component:ListainterfaceamentosComponent},
  {path: 'cadastro', component:cadastrointerfaceamento}
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
