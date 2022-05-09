import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../Services/entreprise.service";
import {ConvertToExcelService} from "../convert-to-excel.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css','./../enterprise-space/deadlyduck.css','./../../assets/tables.scss']
})
export class ExamsComponent implements OnInit {

  questionnaire:any;
  constructor(private entrepriseService:EntrepriseService,private convertToexcel:ConvertToExcelService ) { }

  ngOnInit(): void
  {
    this.getAllQuestion();

  }


  getAllQuestion()
  {
    this.entrepriseService.getAllQuestion().subscribe(value => {this.questionnaire=value;console.log(value)});
  }


  getReponses(id:number) {

    for(let q of this.questionnaire)
    {
      console.log(q)
      if(q.id==id)
      {
        this.convertToexcel.save(q);
      }
    }
  }
}
