import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailClassroomPageRoutingModule } from './detail-classroom-routing.module';

import { DetailClassroomPage } from './detail-classroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailClassroomPageRoutingModule
  ],
  declarations: [DetailClassroomPage]
})
export class DetailClassroomPageModule {}
