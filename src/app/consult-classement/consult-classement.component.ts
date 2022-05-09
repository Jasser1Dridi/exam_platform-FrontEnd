import {AfterViewInit, Component, OnInit} from '@angular/core';
import {EntrepriseService} from "../Services/entreprise.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-consult-classement',
  templateUrl: './consult-classement.component.html',
  styleUrls: ['./consult-classement.component.css','./../../assets/tables.scss']
})
export class ConsultClassementComponent implements OnInit,AfterViewInit {

  scores:any;
  constructor(private es:EntrepriseService,private route:ActivatedRoute,private http:HttpClient) { }


  ngOnInit(): void {

  }
  data: any[] =[];
  getScores()
  {
    this.es.getScore(this.route.snapshot.params['id']). then( (value: any)=>{this.scores=value;  this.GetAllCandidat();

    });
    this.shorteddata= this.data.sort((a, b) => {
      const a2 = a ;
      const b2 = b ;
      if (a2.something > b2.something) {
        return 1;
      }

      if (a2.something < b2.something) {
        return -1;
      }

      return 0;
    })
  }
  shorteddata:any[]=[]
  GetAllCandidat()
  {
    for(let s of this.scores)
    {
       this.getEvents(s.candidat). then((data) =>{
         data[0]['score']=s.candidat_score
         this.data.push(data[0])


       })
    }


    console.log(this.data)
  }
  getCandidat(id:number)
  {
      this.http.get('http://127.0.0.1:8000/getcandidat/'+id)

  }
  getEvents(id:number) :Promise<any>{
    let restt;
     return  this.http.get('http://127.0.0.1:8000/getOneCandidat/'+id)
      .toPromise()
      .then(res => {
        console.log(res);
        // you returned no value here!
       return res;
      })
  }

  ngAfterViewInit(): void {
    this.getScores()

  }
}
