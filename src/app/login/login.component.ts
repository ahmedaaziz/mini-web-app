import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:any){

    // console.log(loginForm.value);
    // console.log(loginForm.value.email);
    // console.log(loginForm.value.password);
    if(loginForm.invalid) {
      return;
    } else {
      this._auth.login(loginForm.value)
      .subscribe((response) => {
        console.log(response);
        loginForm.reset();
        this._router.navigate(['/']);

      })
    }

  }


}
