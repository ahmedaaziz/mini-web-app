import { ViewCountryComponent } from './country/view-country/view-country.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from "./city/add-city/add-city.component";
import { AddCountryComponent } from "./country/add-country/add-country.component";
import { EditCountryComponent } from "./country/edit-country/edit-country.component";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { EditCityComponent } from "./city/edit-city/edit-city.component";

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'login',
  //   pathMatch:'full'
  // },
  {
    path:'',
    component:HomeComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent,

  },
  {
    path:'add-country',
    component:AddCountryComponent,
  },
  {
    path:'view/:id',
    component:ViewCountryComponent
  },
  {
    path:'edit/:id',
    component:EditCountryComponent
  },
  {
    path:'add-city',
    component:AddCityComponent
  },
  {
    path:'edit-city/:id',
    component:EditCityComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
