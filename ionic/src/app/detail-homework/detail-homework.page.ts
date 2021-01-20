import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeworkService } from '../api/homework/homework.service';
import Homework from '../models/Homework';
import Response from '../models/Response';
import Result from '../models/Result';

@Component({
  selector: 'app-detail-homework',
  templateUrl: './detail-homework.page.html',
  styleUrls: ['./detail-homework.page.scss'],
})
export class DetailHomeworkPage implements OnInit {

  private homeworkId : String;
  homework : Homework;
  responses : Response[];
  constructor(private router:Router,private service : HomeworkService) {
    this.responses = [];
   }

  async ngOnInit() {
    this.homeworkId = this.router.getCurrentNavigation().extras.state.id;
    await (await this.service.get(this.homeworkId)).subscribe((result:Result<Homework>)=>{
        if(result.success)
          this.homework = result.data;
    });
    this.service.getResponseById(this.homeworkId).subscribe((result:Result<Response[]>)=>{
      if(result.success)
        this.responses = result.data;
    })
  }

}
