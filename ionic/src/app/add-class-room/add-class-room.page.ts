import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import ClassRoom from '../models/ClassRoom';
import {ClassroomService} from "../api/classroom/classroom.service"
import Result from "../models/Result";
@Component({
  selector: 'app-add-class-room',
  templateUrl: './add-class-room.page.html',
  styleUrls: ['./add-class-room.page.scss'],
})
export class AddClassRoomPage implements OnInit {

  postClass : ClassRoom;
  
  constructor(public modalController : ModalController,public service : ClassroomService ) {
    this.postClass = new ClassRoom("","","");
   }

  ngOnInit() {
  }

  dismiss(){
    this.postClass = new ClassRoom("","","");
    this.modalController.dismiss({dismissed : true});
  }
  async add(){
    console.log(this.postClass);
    (await this.service.addClass(this.postClass)).subscribe((data:Result<ClassRoom>)=>{
      if(data.success)
        this.dismiss();
    });
  }

}
