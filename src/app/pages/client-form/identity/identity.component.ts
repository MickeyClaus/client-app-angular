import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

  submitted = false;
  docTypeList = ['Passport', 'Birth Certificate', 'Driver License'];

  constructor(
    private notifyService: NotificationService,
    public fb: FormBuilder,
    private localStorage: LocalStorageService,
    private router: Router, ) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    docType: ['', [Validators.required]],
    number: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]+$')]],
    date: ['', [Validators.required]],
    series: [''],
    issued: [''],
    file: [''],
  })

  get myForm() {
    return this.registrationForm.controls;
  }

  changedocType(e) {
    this.registrationForm.get('docType').setValue(e.target.value, {
      onlySelf: true
    })
  }


  changeCity(e) {
    this.registrationForm.get('city').setValue(e.target.value, {
      onlySelf: true
    })
  }

  uploadFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.registrationForm.patchValue({
          file: reader.result
        });
      }        
    }
  }


  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {

      this.localStorage.store('identity', this.registrationForm.value);
      this.notifyService.showSuccess("Kлиент успешно создан", "")
      this.router.navigate([`/created-client`, 0]);
    }
  }

  test(){
    this.router.navigate([`/created-client`]);

  }


}
