import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-created-client',
  templateUrl: './created-client.component.html',
  styleUrls: ['./created-client.component.scss']
})
export class CreatedClientComponent implements OnInit {

  clientData: any;
  addressData: any;
  idData: any;

  constructor(    private router: Router,
    private localStorage: LocalStorageService,
    ) { }

  ngOnInit(): void {

    this.clientData = this.localStorage.retrieve('client');
    this.clientData.date = moment(this.clientData.date).format("DD-MM-YYYY");     
    this.addressData = this.localStorage.retrieve('address');
    this.idData = this.localStorage.retrieve('identity');
    this.idData.date = moment(this.idData.date).format("DD-MM-YYYY");     
  }


  handleRemove(){
    this.localStorage.clear('client');
    this.localStorage.clear('address');   
    this.localStorage.clear('identity');    

    this.router.navigate(['/client-form/client']);
  }

}
