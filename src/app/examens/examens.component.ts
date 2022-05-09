import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../Services/entreprise.service";
import {visitAll} from "@angular/compiler";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-examens',
  templateUrl: './examens.component.html',
  styleUrls: ['./examens.component.css','./../enterprise-space/deadlyduck.css','./../../assets/tables.scss']
})
export class ExamensComponent implements OnInit {

  examens:any;

  examenForm = new FormGroup({
    name: new FormControl(''),
    duration: new FormControl('')
  });
  constructor(private entrepriseAuth:EntrepriseService) {

  }

  ngOnInit(): void {
    this.getAllExamens();

  }


  getAllExamens()
  {
    this.entrepriseAuth.getAllExamens().subscribe(value =>{this.examens=value;console.log(value)})
  }
}
