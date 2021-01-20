import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailHomeworkPageRoutingModule } from './detail-homework-routing.module';

import { DetailHomeworkPage } from './detail-homework.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailHomeworkPageRoutingModule
  ],
  declarations: [DetailHomeworkPage]
})
export class DetailHomeworkPageModule {}
