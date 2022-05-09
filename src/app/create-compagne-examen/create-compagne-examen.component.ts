import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../Services/entreprise.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-compagne-examen',
  templateUrl: './create-compagne-examen.component.html',
  styleUrls: ['./create-compagne-examen.component.css']
})
export class CreateCompagneExamenComponent implements OnInit {

  allExamens: any;
  success: boolean = false;
  createCompagne = new FormGroup({
    name: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl()
  })
  examens: [] = [];

  constructor(private entrepriseAuth: EntrepriseService) {
  }

  ngOnInit(): void {
    this.getAllExamens();
  }

  getAllExamens() {
    this.entrepriseAuth.getAllExamens().subscribe(value => {
      this.allExamens = value;
      for (let q of this.allExamens) {
        q['selected'] = false;


      }
    })
  }

  saveCompagneExamen() {
    let exam=[];

  for(let ex of this.getNunblleExamens())
  {
    if(ex.selected==true)
    {
      exam.push(ex)
    }
  }
    let body={
      "name":this.createCompagne.value.name,
      "startDate":this.createCompagne.value.startDate,
      "endDate":this.createCompagne.value.endDate,
      "examens": exam
    }
    this.entrepriseAuth.saveCompagneExamen(body).subscribe(value => {
      console.log(value);
      this.success = true
    })
  }

  getNunblleExamens() {
    let data=[];

    for (let q of this.allExamens)
    {
      if (q.compagneExamen == null)
      {
        data.push(q);
      }
    }
    return data
  }
}
