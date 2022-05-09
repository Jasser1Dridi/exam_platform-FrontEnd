import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {EntrepriseService} from "../Services/entreprise.service";
import {CandidatServiceService} from "../Services/candidat-service.service";
import {interval, Subscription} from "rxjs";
import { HostListener } from '@angular/core';
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-examined-questions',
  templateUrl: './examined-questions.component.html',
  styleUrls: ['./examined-questions.component.css']
})
export class ExaminedQuestionsComponent implements OnInit,AfterViewInit{

  constructor(private route:ActivatedRoute,private r:Router,private candidatService:CandidatServiceService,private http:HttpClient) { }
  candidatId:number=0;
  compagneExamen:number=0;
  Candidat:any;
  questions:any;
  examen:any;


  ngOnInit(): void {
    this.getExamen();
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });

    this.getQuestions();


  }
  score=0;


clickedd=false;
  async calculsore() {
    var questionOrigin = await this.http.get('http://127.0.0.1:8000/getAllQuestionsAndReponsesOfExames/' + this.route.snapshot.params['id']).toPromise();
    for (let q of this.questions) {
      console.log(questionOrigin)
      for (let r of q.reponses) {
        let reponseResult: any = await this.http.get('http://127.0.0.1:8000/getOnereponse/' + r.id).toPromise();
        if (r.istrue == true && reponseResult[0].istrue == true) {
          this.score += (Number(q.points));
        }

      }
    }
    console.log(this.score)
    this.saveScore()
  this.clickedd=true;
this.r.navigate(['/examined/',sessionStorage.getItem('code') ]) }
    /*
   calculScore()
  {
    let questionOrigin:any;
     await this.candidatService.getQuestions(this.route.snapshot.params['id']).subscribe(  value =>
    {
      questionOrigin=value
      for(let q of this.questions)
      {
        console.log(questionOrigin)
        for(let r of q.reponses)
        {

          let reponseResult:any;
          this.candidatService.getOneReponse(r.id).subscribe(value =>{

            reponseResult=value
            console.log(value);
            if(r.istrue== true && reponseResult[0].istrue==true)
            {
              this.score+=(Number(q.points));
            }
            console.log(this.score);

          });


        }
      }
    });
 this.saveScore()
  }
*/
  saveScore()
  {
    let candidatId=    Number(sessionStorage.getItem('candidatId'))
    let examenId=this.route.snapshot.params['id']
    let compagne= Number(sessionStorage.getItem('compagneExamen'));
    console.log(candidatId);
    this.candidatService.saveScore(candidatId,examenId,this.score,compagne).subscribe(value => {console.log(value)});
  }
  ngAfterViewInit() {

  }

  getExamen()
   {
     this.candidatService.getExamen(this.route.snapshot.params['id']).subscribe( value => {this.examen=value[0];console.log(this.examen);    this.dDay.setHours(this.dDay.getHours()+this.examen.duration);
     });

   }

  getQuestions()
  {
    this.candidatService.getQuestions(this.route.snapshot.params['id']).subscribe( value => {this.questions=value;console.log(this.questions)
    for(let q of this.questions)
    {
      for(let r of q.reponses )
      {
        r.istrue=false;
      }
    }


    });
  }


  private subscription: Subscription | undefined;


   dDay = new Date();


  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference: number=0;
  public secondsToDday: number=0;
  public minutesToDday: number=0;
  public hoursToDday: number=0;
  public daysToDday: number=0;


  private getTimeDifference () {

    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }




}
