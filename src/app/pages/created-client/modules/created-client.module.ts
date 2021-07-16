import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedClientRoutingModule } from './created-client-routing.module';
import { CreatedClientComponent } from '../created-client.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreatedClientComponent],
  imports: [
    CommonModule,
    CreatedClientRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule,
  ]
})
export class CreatedClientModule { }
