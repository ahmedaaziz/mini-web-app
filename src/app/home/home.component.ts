import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  token:string = '';

  ngOnInit(): void {
    // this.getLocalStorage();
    // this.getCountryList();
  }
  // getLocalStorage(){

  //   const TOKEN = localStorage.getItem('token')

  //   console.log('Token passed !',TOKEN);

  // }
  // getCountryList(){
  //   console.log('Fetch Country begins!');

  //   return this.http.getCountriesList().subscribe(res=>{
  //     console.log(res);
  //   })
  // }
}
