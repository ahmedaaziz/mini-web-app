import { Router } from '@angular/router';
import { Component, OnInit,OnChanges,SimpleChanges} from '@angular/core';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   isLogged:boolean = false;
  constructor(private auth:AuthService,private router:Router) {
  }

  ngOnInit(): void {
    this.checkStatus();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.checkStatus()

  }
  logOut(){
    this.auth.clearLocalStorage();
    this.isLogged = false;
    console.log(this.isLogged);
    this.router.navigate(['login']);
  }

  checkStatus(){
    if(this.auth.isLogged === true) {
      this.isLogged = true
    }
  }
}
