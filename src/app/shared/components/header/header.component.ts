import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLogged:boolean = false;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.status();
  }
  logOut(){
    this.auth.clearLocalStorage();
    this.isLogged = false;

  }
  status(){
    if(this.auth.isLogged == true) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      this.router.navigate(['login']);
    }
  }
}
