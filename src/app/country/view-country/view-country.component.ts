import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "src/app/shared/services/ApiService/api-service.service";

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.scss']
})
export class ViewCountryComponent implements OnInit {
  cities:any[] = [];
  country:any[] = [];
  noCitiesAddedYet:boolean = true;
  countryName:string = '';
  constructor(private apiService:ApiServiceService,
              private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCities();
  }
  loadCities(){
    this.apiService.loadCities(this.router.snapshot.params.id)
    .subscribe(
      res => {
        if(!res.length) {
          this.noCitiesAddedYet = true;
        } else {
          this.noCitiesAddedYet = false;
          console.log(res);
          this.cities = res;
          // let country = this.cities.map(({ country }) => country)
          // console.log(country);
        }

      }
    )
  }

  removeCity(id:number){
    this.apiService.removeCity(id)
    .subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
      }
    )

  }



}
