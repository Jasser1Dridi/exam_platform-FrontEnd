import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AdminServiceService} from "../Services/admin-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-space-candidat-edit',
  templateUrl: './admin-space-candidat-edit.component.html',
  styleUrls: ['./admin-space-candidat-edit.component.css','./../../app/frontpage/deadlyduck.css']
})
export class AdminSpaceCandidatEditComponent implements OnInit {
  candidat:any;
  constructor(private as:AdminServiceService,private route:ActivatedRoute) { }
  candidatForm:any;
  sucess:boolean=false;
  ngOnInit(): void {
    this.getCandidat();

  }
  getCandidat()
  {
      this.as.getCandidat(this.route.snapshot.params['id']).subscribe(value=>{console.log(value);
        this.candidat=value;
        this.candidatForm= new FormGroup({
          nom : new FormControl(this.candidat[0].nom),
          email : new FormControl(this.candidat[0].email),
          phoneNumber : new FormControl(this.candidat[0].phoneNumber),
          adresse : new FormControl(this.candidat[0].adresse),
          domaine : new FormControl(this.candidat[0].domaine)
        })
        });
  }

  update() {
    console.log(this.candidatForm.value);
    this.as.update(this.route.snapshot.params['id'],this.candidatForm.value).subscribe(value=>{this.sucess=true});
  }
}
