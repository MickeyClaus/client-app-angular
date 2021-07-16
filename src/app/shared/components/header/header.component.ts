import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AccountInfoStore } from 'src/app/accountInfo/accountinfo.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(
    private router: Router,
  
    ) {
  }

  ngOnInit() {

  }




  // onLogout() {
  //   this.accountInfoStore.logout();
  //   this.router.navigate(["login"]);
  // }

}



