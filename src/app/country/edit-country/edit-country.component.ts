import { Country } from '../../interfaces/country';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiServiceService } from "../../shared/services/ApiService/api-service.service";

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {
  currentName:string = '';


  constructor(private router:ActivatedRoute,
    private apiService:ApiServiceService) {
    }

    ngOnInit(): void {
    this.apiService.getCurrentCountry(this.router.snapshot.params.id)
    .subscribe(
      res=> {
        console.log(res);
        this.currentName = res.name;
      },
      err => {
        console.log(err);

      }
    )
  }


  onSubmit(editCountryForm:NgForm){
    console.log(editCountryForm.value);
    console.log(this.router.snapshot.params.id);

    this.apiService.updateCountry(this.router.snapshot.params.id,editCountryForm.value)
    .subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err);

      }
    )
  }


}
