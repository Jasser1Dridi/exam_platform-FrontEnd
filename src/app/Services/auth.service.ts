import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  headerss = {
    'Content-Type': 'application/json'
  }
  constructor(private http: HttpClient) { }

  SignUp(name:string,email:string,password:string,phoneNumber:number,adresse:string,cin:number) :Observable<any>
  {
    return this.http.post('http://127.0.0.1:8000/auth/signUpCandidat',
      {
                "name":name,
                "email":email,
                "password":password,
                "phoneNumber":phoneNumber,
                "adresse":adresse,
                "cin":cin
    } ,{headers:this.headerss} );

  }
  SignUpEntreprise(name:string,email:string,password:string,phoneNumber:number,adresse:string,domaine:string) :Observable<any>
  {
    return this.http.post('http://127.0.0.1:8000/auth/signUpEntreprise',
      {
        "name":name,
        "email":email,
        "password":password,
        "phoneNumber":phoneNumber,
        "adresse":adresse,
        "domaine":domaine
      } ,{headers:this.headerss} );

  }
  SignIn(username:string,password:string) : Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/auth/signIn',
      {
        params:{"email":username,"password":password}
       ,headers:this.headerss} );

  }
}
