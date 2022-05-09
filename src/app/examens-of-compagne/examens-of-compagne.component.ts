import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntrepriseService} from "../Services/entreprise.service";

@Component({
  selector: 'app-examens-of-compagne',
  templateUrl: './examens-of-compagne.component.html',
  styleUrls: ['./examens-of-compagne.component.css']
})
export class ExamensOfCompagneComponent implements OnInit {

  constructor(private route:ActivatedRoute,private es:EntrepriseService) { }
  examens:any;
  ngOnInit(): void {
    this.getExamensOfCompagne();

  }


  getExamensOfCompagne()
  {
   this.es.getAllExamsOfCompagnie( this.route.snapshot.params['id']).subscribe(value => {this.examens=value;console.log(this.examens)})
  }
}
