import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CandidatServiceService} from "../Services/candidat-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-examined',
  templateUrl: './examined.component.html',
  styleUrls: ['./examined.component.css','../frontpage/FrontPageExternalCss.css']
})
export class ExaminedComponent implements OnInit {
  allcompagneExamen:any;
  compagneDetails:any;
  candidatId:number=0;
  compagneExamen:number=0;
  candidat:any;
  constructor(private route:ActivatedRoute,private candidatService:CandidatServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.decodeValueUnique();
    this.examenFinish()

    this.getCandidat();
    this.getAllExames();
    this.getCompagneDetail();

  }

  getAllExames()
  {
    this.candidatService.getAllExamesOfC(this.compagneExamen).subscribe(
      value => {
                       console.log(value);this.allcompagneExamen=value




    })
  }
  getCompagneDetail()
  {
    this.candidatService.getCompagneDetail(this.compagneExamen).subscribe(value => {this.compagneDetails=value})
  }
  getCandidat()
  {
    this.candidatService.getCandidat(this.candidatId).subscribe(value=>{this.candidat=value;console.log(this.candidat)});
  }
  decodeValueUnique()
  {
    sessionStorage.setItem('code',this.route.snapshot.params['id']);

    this.candidatId=this.route.snapshot.params['id'].substring(0,this.route.snapshot.params['id'].indexOf('-'));
    sessionStorage.setItem('candidatId',String(this.candidatId))

    this.compagneExamen=this.route.snapshot.params['id'].substring(this.route.snapshot.params['id'].indexOf('-')+1,this.route.snapshot.params['id'].lastIndexOf('-'));
    sessionStorage.setItem('compagneExamen',String(this.compagneExamen))



  }

  candidatExamScore:any;
  examenFinish()
  {
    return  this.http.get('http://127.0.0.1:8000/examFinished/' + this.candidatId  ).subscribe(value => {this.candidatExamScore=value})

  }
  done(examid :number)
  {
    for(let c of this.candidatExamScore )
    {
      if(c.examen == examid )
      {
        return true;
      }

    }
    return false;
  }

  checkDate()
  {
    let newDate = new Date(this.compagneDetails[0].end_date);
    let curentDate = new Date();
    if(newDate < curentDate)
    {
      return true
    }
    else
      return false;
  }
}
