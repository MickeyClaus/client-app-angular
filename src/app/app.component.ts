import { Component } from '@angular/core';
import { fadeAnimation } from './interceptors/router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]

})
export class AppComponent {
  title = 'client-app';

  
  // public getRouterOutletState(outlet) {
  //   return outlet.isActivated ? outlet.activatedRoute : '';
  // }
}
