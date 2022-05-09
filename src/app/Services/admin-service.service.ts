import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  headerss = {
    'Content-Type': 'application/json'
  }

  constructor(private http:HttpClient) { }


  getAllCandidat()
  {
    return this.http.get('http://127.0.0.1:8000/getAllEntrprises',{headers:this.headerss})

  }

  getCandidat(id: any) {
    return this.http.get('http://127.0.0.1:8000/getOneEntreprise/'+id,{headers:this.headerss})
  }

  update(id:number,value:any) {
    return this.http.put('http://127.0.0.1:8000/Update/'+id,value,{headers:this.headerss})

  }

  deleteEntreprise(id: number)
  {
    return this.http.delete('http://127.0.0.1:8000/delete/'+id,{headers:this.headerss})

  }

  getAllQuestion() {
    return this.http.get('http://127.0.0.1:8000/getAllQuestionsByAdmin',{headers:this.headerss})

  }

  deleteQuestion(id: number) {
    return this.http.delete('http://127.0.0.1:8000/deleteQuestion/'+id,{headers:this.headerss})

  }

  saveQuestionnaire(value: any) : Observable<any>
  {
    let reponses:Object[]=[];
    for(let repo  of value.reponses)
    {
      reponses.push({"reponse":repo.reponse,'isTrue':repo.isTrue });
    }
    console.log(reponses)
    value['managedby']='admin'
    console.log({
      "points": value.points,
      "questionName": value.questionName,
      "domaine":value.domaine,
      "managedby":'admin',
      "reponses": reponses
    })
    let body={
      "points": value.points,
      "questionName": value.questionName,
      "domaine":value.domaine,
      "managedby":'admin',
      "reponses": reponses
    };
    return  this.http.post('http://127.0.0.1:8000/saveQuestion',value,{headers:this.headerss});

  }
}
