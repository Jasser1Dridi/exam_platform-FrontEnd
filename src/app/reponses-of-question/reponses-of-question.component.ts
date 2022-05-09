import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../Services/entreprise.service";

@Component({
  selector: 'app-reponses-of-question',
  templateUrl: './reponses-of-question.component.html',
  styleUrls: ['./reponses-of-question.component.css','./../enterprise-space/deadlyduck.css']
})
export class ReponsesOfQuestionComponent implements OnInit {

  questions:any;
  questionId=this.route.snapshot.params['id'];
  selectedQuestion:any;
  constructor(private route:ActivatedRoute,private es:EntrepriseService) { }

  ngOnInit(): void {
    this.getReponsesOfQuestion();
  }

  getReponsesOfQuestion()
  {

    this.es.getAllQuestion().subscribe(value => {
      this.questions=value
      for(let q of this.questions)
      {
        if(q.id == this.questionId)
        {
          this.selectedQuestion=q;
        }
      }
      console.log(this.selectedQuestion)
    });



  }
}
