import { createComponent } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { CountriesAndCities } from 'src/app/mocks/countries';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  submitted = false;
  countryList = CountriesAndCities;
  cities: any[] = [];

  constructor(public fb: FormBuilder, private localStorage: LocalStorageService, private router: Router,) { }

  ngOnInit(): void {
  }

  addressForm = this.fb.group({
    index: [''],
    region: [''],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    home: [''],
    street: [''],
  })

  get myForm() {
    return this.addressForm.controls;
  }

  changeCountry(e) {
    this.addressForm.get('country').setValue(e.target.value.name, {
      onlySelf: true
    })
  }

  getCities(e){
    console.log(e);
    
    this.countryList.forEach(element => {
      if(e.value.id == element.id){
        this.cities = element.cities
      }
    });
  }


  changeCity(e) {
    this.addressForm.get('city').setValue(e.target.value, {
      onlySelf: true
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.addressForm.valid) {
      return false;
    } else {

      this.localStorage.store('address', this.addressForm.value);
      this.router.navigate([`/client-form/identity`]);
      console.log(this.addressForm.value)
    }
  }

}
