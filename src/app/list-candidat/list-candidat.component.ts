import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EntrepriseService} from "../Services/entreprise.service";

@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css','./../../assets/tables.scss']
})
export class ListCandidatComponent implements OnInit {

  constructor(private rout:ActivatedRoute , private es:EntrepriseService) { }
  allCandidats:any;
  ngOnInit(): void {
    this.getCandidat();
  }


  getCandidat()
  {
   this.es.getCandidats( this.rout.snapshot.params['id']).subscribe(value =>
   {
     this.allCandidats=value;console.log(value)
   });
  }
}
