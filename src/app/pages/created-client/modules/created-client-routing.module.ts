import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatedClientComponent } from '../created-client.component';

const routes: Routes = [{
  path: '',
  component: CreatedClientComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatedClientRoutingModule { }
