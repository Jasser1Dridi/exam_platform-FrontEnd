import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','./signup.component.css','./style.css','./bootstrap-4-navbar.css','./bootstrap.min.css']
})
export class SignupComponent implements OnInit {

  saved:boolean=false;
  entrepriseForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl(''),
    domaine: new FormControl(''),
  });
  constructor(private authSerive:AuthService) { }

  ngOnInit(): void
  {
  }

  check() : void
  {
    this.authSerive.SignUpEntreprise(this.entrepriseForm.value.name,this.entrepriseForm.value.email,this.entrepriseForm.value.password,this.entrepriseForm.value.mobile,this.entrepriseForm.value.address,this.entrepriseForm.value.domaine).subscribe(value =>
    {
      this.saved=true;
      console.log(value);

    })
    console.log(this.entrepriseForm);

  }

}
