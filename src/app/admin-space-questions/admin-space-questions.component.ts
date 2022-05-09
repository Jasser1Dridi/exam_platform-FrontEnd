import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from "../Services/admin-service.service";

@Component({
  selector: 'app-admin-space-questions',
  templateUrl: './admin-space-questions.component.html',
  styleUrls: ['./admin-space-questions.component.css','./../../app/frontpage/deadlyduck.css']
})
export class AdminSpaceQuestionsComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }
  allQuestion:any;
  ngOnInit(): void {
    this.getAllQuestions();

  }

  getAllQuestions()
  {
    this.adminService.getAllQuestion().subscribe(value=>{this.allQuestion=value});
  }
  deleteQuestion(id:number)
  {
    this.adminService.deleteQuestion(id).subscribe(value=>{window.location.reload()});
  }

}
