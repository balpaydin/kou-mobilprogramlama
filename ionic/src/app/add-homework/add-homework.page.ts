import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeworkService } from '../api/homework/homework.service';
import Homework from '../models/Homework';
import Result from '../models/Result';

@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.page.html',
  styleUrls: ['./add-homework.page.scss'],
})
export class AddHomeworkPage implements OnInit {

  postHomework:Homework;
  @Input() classId :String;
  constructor(private modalController:ModalController,public service : HomeworkService) { 
    this.postHomework = new Homework();
    this.postHomework.body = "";
    this.postHomework.name = "";
    this.postHomework.classId = "";
  }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss({dismissed : true});
  }
  async add(){
    this.postHomework.classId = this.classId;
    console.log(this.postHomework);
    await (await this.service.add(this.postHomework)).subscribe((result:Result<Homework>)=>{
      if(result.success){
        this.dismiss();
      }
    })
  }

}
