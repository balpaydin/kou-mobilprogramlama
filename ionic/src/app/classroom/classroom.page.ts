import { Component, OnInit } from '@angular/core';
import {ClassroomService} from "../api/classroom/classroom.service"
import ClassRoom from "../models/ClassRoom";
import { ModalController } from '@ionic/angular';
import { AddClassRoomPage } from '../add-class-room/add-class-room.page';
import Result from "../models/Result";
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.page.html',
  styleUrls: ['./classroom.page.scss'],
})
export class ClassroomPage implements OnInit {

  service:ClassroomService;
  classRooms:ClassRoom[];
  registerClassRoom:ClassRoom[];
  constructor(service : ClassroomService,public modalController : ModalController,private router:Router) {
    this.service = service;
   }

 async ngOnInit() {
    (await this.service.getOwnClassRooms()).subscribe((data:Result<ClassRoom[]>)=>{
      console.log(data);
      if(data.success)
        this.classRooms = data.data;
    });
    (await this.service.getClassRooms()).subscribe((data:Result<ClassRoom[]>)=>{
      if(data.success)
        this.registerClassRoom = data.data;
    });
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: AddClassRoomPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  click(id:number){
    console.log("tiklandi" , id);
    this.router.navigate(["/detail-classroom"],{state:{id}});

  }

}
