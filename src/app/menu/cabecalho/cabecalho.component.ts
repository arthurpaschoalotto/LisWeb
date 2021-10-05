import { Component, OnInit } from '@angular/core';

export class MenuItem{
  label: string ='';
  icon: string = '';
  showOnMobile: boolean = true;
  showOnTablet: boolean = true;
  showOnDesktop: boolean = true;

}

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})

export class CabecalhoComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Central de compras',
      icon: 'attach_money',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Manual do usuario',
      icon: 'notes',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Videos',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Noticias',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Ajuda',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Deslogar',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
