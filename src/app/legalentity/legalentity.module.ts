import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import routes from './legalentity-routing.module';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent,ListComponent],
  exports: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LegalentityModule { }
