import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import Result from '../models/Result';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit ,OnDestroy{

  public result:Result<String>;
  constructor(private authService:AuthService,private  router:  Router,public toastController: ToastController) { }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.toastController.dismiss();
  }
  
  register(form){
    this.authService.register(form.value).subscribe((res:Result<String>)=>{
      this.result = res;
      if(res.success){
        this.toastController.dismiss("error");
        this.router.navigateByUrl('tabs');}
      else this.presentToast(res.message);
    });
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      id:"error",
      message,
      duration: 5000
    });
    toast.present();
  }


}
