import { Component, OnInit } from '@angular/core';

// const ITENS_NAV: SideBar[] = [
//   {
//     itens:'Recepção',
//     children: [
//       {itens:'Nova Requisição'},
//       {itens:'Requisiçãos'},
//       {itens:'Pacientes'},
//     ]
//   },{
//     itens:'Coleta',
//     children: [
//       {itens:'Registro de coleta'},
//       {itens:'Lista de espera'},
//       {itens:'Coletores'},
//     ]
//   },
// ];

export class NavItem{
  title: string = "";
  icon?: string = "";
  routerlink?: string = "";
  subitens?: NavItem[] = [];

}

@Component({
  selector: 'app-sidebaradm',
  templateUrl: './sidebaradm.component.html',
  styleUrls: ['./sidebaradm.component.scss']
})

export class SidebaradmComponent implements OnInit {

  menu: NavItem[] = [
                      {title:'Recepção', icon:'/assets/recepcao.png',routerlink:'##', subitens:[
                        {title:'Nova Requisição',routerlink:'#'},
                        {title:'Requisições'},
                        {title:'Pacientes',routerlink:'pacientes'}
                      ]},
                      {title:'Coleta', icon:'/assets/coleta.png',routerlink:'###', subitens:[
                        {title:'Registro de Coleta'},
                        {title:'Lista de Espera'},
                        {title:'Coletores'}
                      ]}
                    ];

   constructor() {

   }

  ngOnInit(): void {
    console.table(this.menu);
  }

}
