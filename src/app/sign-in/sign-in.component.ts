import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  saved=true;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  signIn()
  {
    if(this.loginForm.value.username=="admin" && this.loginForm.value.password=="admin" )
    {
      this.route.navigate(['/admin'])
    }

    this.authService.SignIn(this.loginForm.value.username,this.loginForm.value.password).subscribe(value => {
      console.log(value);

      if (value.state == true) {
        window.sessionStorage.setItem("username", value.user[0].nom);

        if (value.user[0].dtype == 'candidat') {
          this.route.navigate(['/candidat'])

        }
        if (value.user[0].dtype == 'entreprise') {
          this.route.navigate(['/entrepriseSpace/portal']);

        }

      }
      else
      {

      this.saved=false;
    }

  });
}
}
