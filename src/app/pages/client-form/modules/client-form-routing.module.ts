import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { IdentityGuardService } from 'src/app/guards/identity-guard.service';
import { AddressComponent } from '../address/address.component';
import { ClientFormComponent } from '../client-form.component';
import { ClientComponent } from '../client/client.component';
import { IdentityComponent } from '../identity/identity.component';

const routes: Routes = [
  {
    path: '',
    component: ClientFormComponent,
    // canActivateChild: [AddressAccessGuard],
    children: [
      {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'identity',
        component: IdentityComponent,
        canActivate: [IdentityGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFormRoutingModule { }
