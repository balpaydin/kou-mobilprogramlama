import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserClassroomPageRoutingModule } from './add-user-classroom-routing.module';

import { AddUserClassroomPage } from './add-user-classroom.page';
import { UsernamePipe } from '../pipes/username.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserClassroomPageRoutingModule
  ],
  declarations: [AddUserClassroomPage,UsernamePipe]
})
export class AddUserClassroomPageModule {}
