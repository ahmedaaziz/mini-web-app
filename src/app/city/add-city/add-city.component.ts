import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "src/app/shared/services/ApiService/api-service.service";

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  countries:any;
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.apiService.getCountries().subscribe(res=>{
    console.log(res);
    this.countries = res;
  })
}

  onSubmit(value:string){
    // console.log(value);
    // this.apiService.addCity(value)
    // .subscribe(res=>{
    //   console.log(res);

    // })
  }
}
