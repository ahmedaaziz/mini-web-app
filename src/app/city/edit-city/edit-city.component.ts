import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ApiServiceService } from "src/app/shared/services/ApiService/api-service.service";

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {
  currentCityName:any;
  constructor(private apiService:ApiServiceService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getCurrentCity(this.router.snapshot.params.id)
    .subscribe(
      res => {
        console.log(res);
        console.log(res.countryId);
        this.currentCityName = res.name;
      },
      err => {
        console.warn(err.message);

      }
    )
  }
  onSubmit(editCityForm:NgForm){
    console.log(editCityForm.value);
    this.apiService.updateCity(this.router.snapshot.params.id,editCityForm.value)
    .subscribe(
      res => {
        console.log(res);

      }
    )
  }
}
