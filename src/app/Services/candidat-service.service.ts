import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CandidatServiceService {

  headerss = {
    'Content-Type': 'application/json'
  }
  constructor(private http: HttpClient) { }

  getAllExamesOfC(id:number) : Observable<any>
  {
    return  this.http.get('http://127.0.0.1:8000/getAllExamesOfCompagne/'+id,{headers:this.headerss});
  }

  getCompagneDetail(id :number) : Observable<any>{
    return  this.http.get('http://127.0.0.1:8000/getOneCompagne/'+id,{headers:this.headerss});

  }

  getCandidat(candidatId: number) : Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/getOneCandidat/'+candidatId,{headers:this.headerss});
  }
  getQuestions(examId:number) : Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/getAllQuestionsAndReponsesOfExames/'+examId,{headers:this.headerss});

  }

  getExamen(param: any) : Observable<any> {

    return this.http.get('http://127.0.0.1:8000/getOneExamen/'+param,{headers:this.headerss});

  }
  getOneReponse(id:number)
  {
    return this.http.get('http://127.0.0.1:8000/getOnereponse/'+id,{headers:this.headerss});
  }

  saveScore(candidatId : number,examenId:number,score:number,com:number)
  {
    return this.http.post('http://127.0.0.1:8000/calculScore',{ 'candidatId':candidatId,'examenId':examenId,'score':score,'compagneExamen':com},{headers:this.headerss})
  }
}
