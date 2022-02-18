import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
   visibleSidebar1;

  constructor(private primengConfig: PrimeNGConfig) {}
  items: MenuItem[];
    ngOnInit() {
      this.primengConfig.ripple = true;
      this.items = [
        {
        label: 'LegalEntity',
        icon:'pi pi-fw pi-building',
        items: [

            {
                label: 'Create',
                icon:'pi pi-fw pi-trash',
                routerLink: '/legalentity/create',
                command:()=>this.visibleSidebar1 = false
            },
            {
                label: 'List',
                icon:'pi pi-fw pi-external-link',
                routerLink: '/legalentity/list',
                command:()=>this.visibleSidebar1 = false
            }
        ]
            }
        ]
    }

}
