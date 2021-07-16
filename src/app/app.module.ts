import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { MatMenuModule } from '@angular/material/menu';
import { AuthGuardService } from './guards/auth-guard.service';
import { IdentityGuardService } from './guards/identity-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    IdentityGuardService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
