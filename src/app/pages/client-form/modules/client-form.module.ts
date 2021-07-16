import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientFormRoutingModule } from './client-form-routing.module';
import { ClientFormComponent } from '../client-form.component';
import { ClientComponent } from '../client/client.component';
import { AddressComponent } from '../address/address.component';
import { IdentityComponent } from '../identity/identity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientFormComponent, ClientComponent, AddressComponent, IdentityComponent],
  imports: [
    CommonModule,
    ClientFormRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class ClientFormModule { }
