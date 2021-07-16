import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { NotificationService } from '../services/notification.service';
// import { AccountInfoQuery } from '../accountInfo/accountInfo.query';

@Injectable({
  providedIn: 'root'
})
export class IdentityGuardService implements CanActivate {

  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private notifyService: NotificationService,
  ) { }

  canActivate() {
    if (this.localStorage.retrieve('address') && this.localStorage.retrieve('client')) {
      return true;
    } else {
      this.notifyService.showWarning("Вы должны заполнить данные", "")

      this.router.navigate([`/client-form/client`]);
      return false;
    }

  }
}
