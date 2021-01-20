import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassroomPageRoutingModule } from './classroom-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ClassroomPage } from './classroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassroomPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ClassroomPage]
})
export class ClassroomPageModule {}
