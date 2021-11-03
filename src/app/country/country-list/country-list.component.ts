import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../../shared/services/ApiService/api-service.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countryList:any[] = [];
  id:any;
  errorMsg:string = '';
  showLoginMsg:boolean = false;
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.getCountriesList();
  }
  getCountriesList(){
    this.apiService.getCountries()
    .subscribe(
      res => {
        // console.log('Response ', res)
        this.countryList = res;
      },
      error => {
        console.log('Error ', error.message);
        if(error.status == '401') {
          this.showLoginMsg = !this.showLoginMsg
        } else {
          this.errorMsg = error.message

        }
      },
      ()=> {
        // console.log('Complete');
      }
    );
  }

  removeCountry(id:any){
    this.apiService.removeCountry(id)
    .subscribe(
      res => {
        // console.log(res);
      }
    )
  }
}
