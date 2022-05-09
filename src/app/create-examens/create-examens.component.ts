import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EntrepriseService} from "../Services/entreprise.service";

@Component({
  selector: 'app-create-examens',
  templateUrl: './create-examens.component.html',
  styleUrls: ['./create-examens.component.css']
})
export class CreateExamensComponent implements OnInit {
  sucess:boolean=false;
  questionnaire:any;
  constructor(private es:EntrepriseService) {

  }


  examenForm= new FormGroup({
        'name': new FormControl(),
        'duration': new FormControl(),
  })
  ngOnInit(): void {
    this.getAllQuestion();
  }
  getAllQuestion()
  {
    this.es.getAllQuestion().subscribe(value => {this.questionnaire=value ;
      for(let q of this.questionnaire)
      {
        q['selected'] = false;

      }
      console.log(value)});
  }
  saveExamen()
  {
    this.es.saveExamen(this.examenForm.value,this.questionnaire).subscribe(value => {console.log(value);this.sucess=true});
   console.log( this.questionnaire);
  }

  printNullableExams()
  {
    let data=[];
    for(let q of this.questionnaire)
    {
      if(q.examen== null)
      {
        data.push(q);
      }
    }
    return data;
  }
}
