import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentcontainer',
  templateUrl: './contentcontainer.component.html',
  styleUrls: ['./contentcontainer.component.css','./../enterprise-space/deadlyduck.css']
})
export class ContentcontainerComponent implements OnInit {

  username:string | null="";
  constructor() { }

  ngOnInit(): void {
    this.getUsername();
  }
  getUsername()
  {
   this.username= window.sessionStorage.getItem("username");
  }

}
