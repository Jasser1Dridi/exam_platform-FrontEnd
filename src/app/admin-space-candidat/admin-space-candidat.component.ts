import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from "../Services/admin-service.service";

@Component({
  selector: 'app-admin-space-candidat',
  templateUrl: './admin-space-candidat.component.html',
  styleUrls: ['./admin-space-candidat.component.css','./../enterprise-space/deadlyduck.css']
})
export class AdminSpaceCandidatComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }
  allCandidat:any;
  ngOnInit(): void {
    this.getAllCandidat();
  }


  getAllCandidat()
  {
    this.adminService.getAllCandidat().subscribe(value => {this.allCandidat=value;console.log(value)});
  }

  deleteEntreprise(id:number) {
this.adminService.deleteEntreprise(id).subscribe(value=>{window.location.reload()});
  }
}
