import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Country } from "src/app/interfaces/country";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url:string = 'https://taskfrontendapi.azurewebsites.net/api/user/login';
  countries_url:string = 'https://taskfrontendapi.azurewebsites.net/api/country';
  countryUrl:string = 'https://taskfrontendapi.azurewebsites.net/api/country';
  citiesUrlByCountry:string = 'https://taskfrontendapi.azurewebsites.net/api/city/getcities/';

  cities_url:string = 'https://taskfrontendapi.azurewebsites.net/api/city';
  constructor(private _http:HttpClient) { }

  login(data:any):Observable<any>{
    return this._http.post(this.url,data)
  }

  getCountries():Observable<Country[]> {

    return this._http.get<Country[]>(this.countries_url);
  }

  addCountry(data:any):Observable<any> {
    return this._http.post(this.countries_url,data)
  }

  removeCountry(id:number):Observable<any> {
    return this._http.delete(`${this.countryUrl}/${id}`);
  }

  getCurrentCountry(id:number):Observable<any>{
    return this._http.get(`${this.countryUrl}/${id}`);
  }

  updateCountry(id:number,data:any){
    console.log(data);
    console.log(id);

    return this._http.put(`${this.countryUrl}/${id}`,data);
  }

  addCity(data:any){
    return this._http.post(this.cities_url,data)
  }

  loadCities(id:number):Observable<any>{
    return this._http.get(`${this.citiesUrlByCountry}/${id}`);
  }

  getCurrentCity(id:number):Observable<any>{
    return this._http.get(`${this.cities_url}/${id}`)
  }
  updateCity(id:number,data:any):Observable<any>{
    return this._http.put(`${this.cities_url}/${id}`,data)
  }

  removeCity(id:number):Observable<any>{
    return this._http.delete(`${this.cities_url}/${id}`);
  }

}
