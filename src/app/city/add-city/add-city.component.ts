import { Router } from '@angular/router';
import { Country } from './../../interfaces/country';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ApiServiceService } from "src/app/shared/services/ApiService/api-service.service";

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  countries:any[]= [];
  countrySelectHasError:boolean = false;
  constructor(private apiService:ApiServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.apiService.getCountries().subscribe(res =>{
    console.log(res);
    this.countries = res;
  })
}
  onSubmit(addCity:NgForm){
    if(addCity.invalid){
      console.log('error');
      return;
    } else {
      let name:string = addCity.value.name;
      let countryId:number = +addCity.value.countryId;

      console.log(name, countryId);
      let value:{} = {
        name,
        countryId
      }
      console.log('value ', value)

      this.apiService.addCity(value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate([`/view/${countryId}`]);
        },
        err => {
          console.log(err.message);

        },
        ()=>{
          console.log('Complete');

        }
      )
    }

  }
}
