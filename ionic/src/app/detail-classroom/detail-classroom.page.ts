import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AddHomeworkPage } from '../add-homework/add-homework.page';
import { AddUserClassroomPage } from '../add-user-classroom/add-user-classroom.page';
import { ClassroomService } from '../api/classroom/classroom.service';
import { HomeworkService } from '../api/homework/homework.service';
import ClassRoom from '../models/ClassRoom';
import Homework from '../models/Homework';
import Result from '../models/Result';

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.page.html',
  styleUrls: ['./detail-classroom.page.scss'],
})
export class DetailClassroomPage implements OnInit {

  private classroomId : String;
  classroom : ClassRoom;
  homeworks : Homework[];
  constructor(private classService:ClassroomService,private homeworkService : HomeworkService,private router:Router,private modalController:ModalController,public alertController: AlertController) { }

  ngOnInit() {
    console.log("state : ",this.router.getCurrentNavigation().extras.state)
    this.classroomId = this.router.getCurrentNavigation().extras.state.id;
    this.classService.get(this.classroomId).subscribe((data:Result<ClassRoom>)=>{
      this.classroom = data.data;
    });
    this.classService.getHomeworks(this.classroomId).subscribe((data:Result<Homework[]>)=>{
      this.homeworks = data.data;
    })
  }

  async openModal(classId : String) {
    console.log("openModal",classId);
    const modal = await this.modalController.create({
      component: AddUserClassroomPage,
      cssClass: 'my-custom-class',
      componentProps:{
        classId
      }
    });
    let _this = this;
    modal.onDidDismiss().then(data=>{
      _this.classService.get(_this.classroomId).subscribe((data:Result<ClassRoom>)=>{
      console.log("data",data);
      _this.classroom = data.data;
    });
    });
    return await modal.present();
  }
  async openHMModal(classId : String){
    console.log("openModal",classId);
    const modal = await this.modalController.create({
      component: AddHomeworkPage,
      cssClass: 'my-custom-class',
      componentProps:{
        classId
      }
    });
    let _this = this;
    modal.onDidDismiss().then(data=>{
      _this.classService.get(_this.classroomId).subscribe((data:Result<ClassRoom>)=>{
      console.log("data",data);
      _this.classroom = data.data;
    });
    });
    return await modal.present();
  }
  async removeHomework(id :String){
    (await this.homeworkService.remove(id)).subscribe((data:Result<Homework>)=>{
      if(data.success){
        this.homeworks = this.homeworks.filter(h=>{
          return h._id != id;
        })
      }
      
    });
  }
  async homeworkInfo(id:String){
    this.router.navigate(["/detail-homework"],{state:{id}});
  }

}
