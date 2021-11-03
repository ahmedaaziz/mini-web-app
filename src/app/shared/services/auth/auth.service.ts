import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from "../ApiService/api-service.service";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = 'https://taskfrontendapi.azurewebsites.net/api/user/login';
  user:boolean = false;

  constructor(private http:HttpClient,
    private apiService:ApiServiceService) {
      const token = localStorage.getItem('user_token');

    }

  login(data:any):Observable<any>{
    return this.apiService.login(data).pipe(
      tap((response:any) => {
        localStorage.setItem('user_token',response.token);
      })
    )
  }

  clearLocalStorage(){
    localStorage.removeItem('user_token');
  }

 get isLogged():boolean{
    if(localStorage.getItem('user_token')){
      this.user = true;
      return true;
    } else {
      this.user = false;
      return false;
    }

  }

}
