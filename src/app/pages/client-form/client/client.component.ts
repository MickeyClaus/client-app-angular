import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  submitted = false;
  customersList = ['VIP Customers', 'Regular Customers', 'New Customers'];
  coordinatorsList = ['Иванов', 'Захаров', 'Чернышева'];


  constructor(public fb: FormBuilder,private localStorage: LocalStorageService,private router: Router) { }

  ngOnInit(): void {
  }

  clientForm = this.fb.group({
    surName: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
    patronymic: [''],
    phone: ['', [Validators.required, Validators.maxLength(11), Validators.pattern('^[0-9]+$')]],
    date: ['', [Validators.required]],
    group: ['', [Validators.required]],
    coordinator: [''],
    gender: ['male'],
    message: [true],
  })

  get myForm() {
    return this.clientForm.controls;
  }

  changeCustomer(e) {
    this.clientForm.get('group').setValue(e.target.value, {
      onlySelf: true
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.clientForm.valid) {
      return false;
    } else {
      this.localStorage.store('client', this.clientForm.value);
      this.router.navigate([`/client-form/address`]);
    }
  }

}
