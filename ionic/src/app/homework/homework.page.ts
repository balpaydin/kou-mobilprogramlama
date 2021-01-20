import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddResponsePage } from '../add-response/add-response.page';
import { UserService } from '../api/user/user.service';
import Homework from '../models/Homework';
import Result from '../models/Result';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.page.html',
  styleUrls: ['./homework.page.scss'],
})
export class HomeworkPage implements OnInit {

  homeworks:Homework[];
  constructor(private service : UserService,private modalController:ModalController) {

   }

  async ngOnInit() {
    await (await this.service.getHomeworks()).subscribe((result:Result<Homework[]>)=>{
      this.homeworks = result.data;
    });
  }
  async openAddResModal(id:String){
    const modal = await this.modalController.create({
      component: AddResponsePage,
      cssClass: 'my-custom-class',
      componentProps:{
        homeworkId : id
      }
    });
    return await modal.present();
  }
}
