import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminSpaceQuestionsComponent} from "../admin-space-questions/admin-space-questions.component";
import {AdminServiceService} from "../Services/admin-service.service";

@Component({
  selector: 'app-create-question-admin',
  templateUrl: './create-question-admin.component.html',
  styleUrls: ['./create-question-admin.component.css']
})
export class CreateQuestionAdminComponent implements OnInit {
  questionForm= this.fb.group({
    questionName: new FormControl(),
    points : new FormControl(),
    domaine: new FormControl(),
    reponses: this.fb.array([this.createReponse()])
  })
  constructor(private fb:FormBuilder,private adminSerivce:AdminServiceService) { }
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
    this.adminSerivce.saveQuestionnaire(this.questionForm.value).subscribe(value => {console.log(value);
      if(value.result=='saved'){this.sucess=true};});
    console.log(this.questionForm.value) }
  ngOnInit(): void {
  }


}
