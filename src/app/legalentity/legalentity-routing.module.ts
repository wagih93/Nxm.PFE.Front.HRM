import { Routes } from '@angular/router';
import { LayoutGlobalComponent } from '../template/layout/layout.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {
    path: 'legalentity',
    component: LayoutGlobalComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
    ],
  },
];
export default routes;
