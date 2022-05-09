import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from "../Services/entreprise.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-invite-candidat',
  templateUrl: './invite-candidat.component.html',
  styleUrls: ['./invite-candidat.component.css','./../../assets/tables.scss']
})
export class InviteCandidatComponent implements OnInit {
  saved=false;
  constructor(private entrepriseAuth:EntrepriseService,private route:ActivatedRoute ) { }
  allCandidat:any;
  ngOnInit(): void {
    this.getAllCandidat();
  }

  getAllCandidat() {
    this.entrepriseAuth.getAllCandidat().subscribe(value => {this.allCandidat=value;
      for(let q of this.allCandidat)
      {
        q['selected'] = false;

      }
      console.log(value)
    })
  }

  addCandidat()
  {
    let selectedCandidat=[];
    console.log(this.allCandidat)
    for(let q of this.allCandidat)
    {
     if(q.selected==true)
     {
       selectedCandidat.push(q);
     }

    }
    console.log(selectedCandidat)
    this.entrepriseAuth.addCandidat(this.allCandidat,this.route.snapshot.params['id']).subscribe(value => {console.log(value); this.saved=true;});
  }
}
