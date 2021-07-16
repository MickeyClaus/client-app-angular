import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { clientForm, createdClient } from "./lazy-loads";
import { AddressComponent } from './pages/client-form/address/address.component';
import { ClientComponent } from './pages/client-form/client/client.component';
import { IdentityComponent } from './pages/client-form/identity/identity.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/client-form/client',
    pathMatch: 'full'
  },
  {
    path: "client-form",
    loadChildren: clientForm,
  
  },
  {
    path: "created-client/:id",
    loadChildren: createdClient,    
  },
  {path: '**', redirectTo: '/client-form/client'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
