import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-signup-candidat',
  templateUrl: './signup-candidat.component.html',
  styleUrls: ['./signup-candidat.component.css','./../signup/style.css','./../signup/bootstrap-4-navbar.css','./../signup/bootstrap.min.css']
})
export class SignupCandidatComponent implements OnInit {
  saved:boolean=false;
  candidatForm = new FormGroup({
    cin: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private authService : AuthService) { }
  ngOnInit(): void {
  }
  signUp():void
  {
    console.log(this.candidatForm.value);

    this.authService.SignUp(this.candidatForm.value.name,this.candidatForm.value.email,this.candidatForm.value.password,this.candidatForm.value.mobile,this.candidatForm.value.address,this.candidatForm.value.cin).subscribe(value => {console.log(value);this.saved=true});

  }


}
