import { ViewCountryComponent } from './country/view-country/view-country.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { AuthInterceptor, AuthInterceptorProvider } from "./shared/interceptors/auth.interceptor";
import { HeaderComponent } from './shared/components/header/header.component';
import { AddCityComponent } from './city/add-city/add-city.component';
import { LoginAlertComponent } from './shared/components/login-alert/login-alert.component';
import { InvalidAlertComponent } from './shared/components/invalid-alert/invalid-alert.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddCountryComponent,
    EditCountryComponent,
    CountryListComponent,
    HeaderComponent,
    AddCityComponent,
    ViewCountryComponent,
    LoginAlertComponent,
    InvalidAlertComponent,
    EditCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
