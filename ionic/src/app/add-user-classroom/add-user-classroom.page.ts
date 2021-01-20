import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ClassroomService } from '../api/classroom/classroom.service';
import { UserService } from '../api/user/user.service';
import ClassRoom from '../models/ClassRoom';
import Result from '../models/Result';
import User from "../models/User";
@Component({
  selector: 'app-add-user-classroom',
  templateUrl: './add-user-classroom.page.html',
  styleUrls: ['./add-user-classroom.page.scss'],
})
export class AddUserClassroomPage implements OnInit {

  public username:String;
  public users:User[];
  public addUsers:Map<String , User>;
  public classroom:ClassRoom;
  @Input() classId :String;

  constructor(private userService:UserService,private modalController:ModalController,private classService : ClassroomService,public alertController: AlertController) { 
    this.users = [];
    this.username = "";
    this.addUsers = new Map<String,User>();
  }

  ngOnInit() {
    this.classService.get(this.classId).subscribe((data:Result<ClassRoom>)=>{
      this.classroom = data.data;
    });
  }
  
  dismiss(){
    this.username = "";
    this.users = [];
    this.modalController.dismiss({dismissed : true});
  }
  click(id){
    console.log(id);
  }
  findUser(){
    if(this.username && this.username.length ){
      this.userService.getUsersByUsername(this.username).subscribe((result:Result<User[]>)=>{
        console.log(result);
        if(result.success){
          this.users = result.data.filter(u=>{
            let found = false;
            this.classroom.users.forEach(c=> {
              if(c._id == u._id){
                found = true;
                return;
              }
            });
            console.log(found);
            return !found;
          });
        }
      });
    }else this.users = [];
  }
  addUser(userId:String){
    this.userService.get(userId).subscribe((result:Result<User>)=>{
      if(result.success){
        this.addUsers.set(userId,result.data);
        console.log(this.addUsers);
      }
    });
  }
  async alertRemoveUser(userId,username) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Öğrenci Sil!',
      message: '<strong>'+username+'</strong> - Bu Öğrenciyi silmek istediğinize emin misiniz?',
      buttons: [
        {
          text: 'İptal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Evet',
          handler: () => {
            this.removeUser(userId);
          }
        }
      ]
    });

    await alert.present();
  }
  removeUser(userId:String){
    this.classService.removeUser(this.classId,userId).subscribe((data:Result<User>)=>{
      if(data.success){
        let index;
        this.classroom.users.forEach((u,i)=>{
          if(u._id == userId){
            index = i;
            return;
          }
        });    
        this.classroom.users.splice(index,1);
      }
    });
  }
  save(){
    let userIds :String[] = [];
    this.addUsers.forEach((i,index)=>{
      userIds.push(index);
    });
   console.log(userIds,this.classId);
    this.classService.addUser(this.classId,userIds).subscribe(result=>{
      console.log(result);
      this.modalController.dismiss();
    });
  }
  removeUserTmp(userId:String){
    this.userService.get(userId).subscribe((result:Result<User>)=>{
      if(result.success){
        this.addUsers.delete(userId);
      }
    })  
  }
}
