import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../Services/entreprise.service";

@Component({
  selector: 'app-compagne-examen',
  templateUrl: './compagne-examen.component.html',
  styleUrls: ['./compagne-examen.component.css','./../enterprise-space/deadlyduck.css','./../../assets/tables.scss' ]})
export class CompagneExamenComponent implements OnInit {

  constructor(private entrepriseAuth:EntrepriseService) { }
  allCompagne:any;
  ngOnInit(): void {
    this.getAllCompagne_examen();
  }

    getAllCompagne_examen() {
    this.entrepriseAuth.getAllCompagneExamen().subscribe(value => {this.allCompagne=value;
      console.log(value)
    })
  }

}
