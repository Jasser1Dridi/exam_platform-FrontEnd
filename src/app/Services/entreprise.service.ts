import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  headerss = {
    'Content-Type': 'application/json'
  }

  constructor(private http:HttpClient) { }

  saveQuestionnaire(value: any) : Observable<any>
{
  let reponses:Object[]=[];
  for(let repo  of value.reponses)
  {
 reponses.push({"reponse":repo.reponse,'isTrue':repo.isTrue });
  }
  console.log(reponses)
  value['managedby']=window.sessionStorage.getItem("username");
    console.log({
      "points": value.points,
      "questionName": value.questionName,
      "domaine":value.domaine,
      "managedby":window.sessionStorage.getItem("username"),
      "reponses": reponses
    })
  let body={
    "points": value.points,
    "questionName": value.questionName,
    "domaine":value.domaine,
    "managedby":window.sessionStorage.getItem("username"),
    "reponses": reponses
  };
  return  this.http.post('http://127.0.0.1:8000/saveQuestion',value,{headers:this.headerss});

  }

  getAllQuestion() : Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/getAllQuestions',{headers:this.headerss})
  }

  getAllExamens() : Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/getAllExamens',{headers:this.headerss})

  }

  saveExamen(value:any,questions:any)
  {
    return this.http.post('http://127.0.0.1:8000/saveExamen',
      {
                "name":value.name,
                "duration":value.duration,
                "questions":questions
            }
      ,{headers:this.headerss})
  }

  getAllQuestionOfExam(id:number) {
    return this.http.get('http://127.0.0.1:8000/getAllQuestionsOfExames/'+id,{headers:this.headerss})

  }
  getAllCompagneExamen() {
    return this.http.get('http://127.0.0.1:8000/getAllCompagneExamen/',{headers:this.headerss})

  }
  saveCompagneExamen(value:any) {
    return this.http.post('http://127.0.0.1:8000/saveCompagneExamen',value,{headers:this.headerss})

  }
  addCandidat(value:any,id:number)
  {
    let body={
      "compagneExamen":id,
      "candidat":value
      }

    ;
    console.log(body)
    return this.http.put('http://127.0.0.1:8000/addCandidats',body,{headers:this.headerss});
  }

  getAllExamsOfCompagnie(id:number) {
    return this.http.get('http://127.0.0.1:8000/getAllExamesOfCompagne/'+id,{headers:this.headerss})

  }
  getAllCandidat()
  {
    return this.http.get('http://127.0.0.1:8000/getcandidats',{headers:this.headerss})

  }

  getCandidat(id:number)
  {
    return this.http.get('http://127.0.0.1:8000/getcandidat/'+id,{headers:this.headerss});
  }

  getScore(param: any)  {
    return this.http.get('http://127.0.0.1:8000/getAllscoreofCompagne/'+param,{headers:this.headerss}).toPromise();

  }

  getCandidats(param: any) {
    return this.http.get('http://127.0.0.1:8000/getCandidats/'+param,{headers:this.headerss})

  }
}
