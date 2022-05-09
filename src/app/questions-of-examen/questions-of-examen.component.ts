import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../Services/entreprise.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-questions-of-examen',
  templateUrl: './questions-of-examen.component.html',
  styleUrls: ['./questions-of-examen.component.css','./../enterprise-space/deadlyduck.css']
})
export class QuestionsOfExamenComponent implements OnInit {

  constructor(private route:ActivatedRoute,private es:EntrepriseService) { }

  questions:any;
  ngOnInit(): void {
    this.getAllQuestionOfExam();
  }


  getAllQuestionOfExam()
  {
    this.es.getAllQuestionOfExam(this.route.snapshot.params['id']).subscribe(value => {this.questions=value;console.log(this.questions)});
  }
}
