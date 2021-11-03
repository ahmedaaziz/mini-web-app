import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   isLogged:boolean = true;
  constructor(private auth:AuthService,private router:Router) {
  }

  ngOnInit(): void {
  }
  logOut(){
    this.auth.clearLocalStorage();
    this.isLogged = false;
    console.log(this.isLogged);
    this.router.navigate(['login']);
  }


}
