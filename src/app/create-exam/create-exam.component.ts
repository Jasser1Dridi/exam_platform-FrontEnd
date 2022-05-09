import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EntrepriseService} from "../Services/entreprise.service";

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css','./../../app/signup/style.css']
})
export class CreateExamComponent implements OnInit {

  constructor(private fb:FormBuilder,private es:EntrepriseService) { }

  ngOnInit(): void {
  }
  questionnaire:any;
  questionForm= this.fb.group({
    questionName: new FormControl(),
    points : new FormControl(),
    domaine: new FormControl(),
    reponses: this.fb.array([this.createReponse()])
  })
  sucess=false;
  createReponse():FormGroup{

    return this.fb.group({
      reponse:new FormControl(),
      isTrue:new FormControl(false)
    })
  }
  get reponses():FormArray{
    return <FormArray> this.questionForm.get('reponses');
  }
  addReponse() {
    this.reponses.push(this.createReponse());
  }

  saveQuestionnaire()
  {
    this.es.saveQuestionnaire(this.questionForm.value).subscribe(value => {console.log(value);
      if(value.result=='saved'){this.sucess=true};});
    console.log(this.questionForm.value) }
  getAllQuestion()
  {
    this.es.getAllQuestion().subscribe(value => {this.questionnaire=value;console.log(value)});
  }
}
