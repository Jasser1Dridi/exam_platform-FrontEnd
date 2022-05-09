import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../Services/entreprise.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css','./../../assets/tables.scss']
})
export class ClassementComponent implements OnInit {

  scores:any;
  constructor(private es:EntrepriseService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getScores()
  }


  getScores()
  {
    this.es.getAllCompagneExamen().subscribe(value=>{this.scores=value;console.log(value)});
  }
}
