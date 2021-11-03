import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from "../../shared/services/ApiService/api-service.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  CountryAdded:boolean = false;
  constructor(private apiService:ApiServiceService,
    private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(addCountryForm:any){
    if(addCountryForm.invalid) {
      return ;
    } else {
      console.log(addCountryForm.value);
      this.apiService.addCountry(addCountryForm.value)
      .subscribe( res => {
        console.log(res);
        this.CountryAdded = true;
        addCountryForm.reset();
        this._router.navigate(['/']);

      });

    }

  }


}
