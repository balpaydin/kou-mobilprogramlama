import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  signOut(){
    this.authService.logout().then(result=>{
      console.log(result);
    });
  }

}
