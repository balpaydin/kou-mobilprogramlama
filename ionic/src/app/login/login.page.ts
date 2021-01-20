import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthService,private  router:  Router,public toastController: ToastController) { }

  ngOnInit() {
  }
  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      if(res.success){
        this.toastController.dismiss("error");
        this.router.navigateByUrl('tabs');
      }
      else this.presentToast(res.message);
    });
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      id:"error",
      color:"danger",
      message,
      buttons: [ {
          icon:"close",
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }


}
