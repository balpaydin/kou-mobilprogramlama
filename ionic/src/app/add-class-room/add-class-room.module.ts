import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClassRoomPageRoutingModule } from './add-class-room-routing.module';

import { AddClassRoomPage } from './add-class-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddClassRoomPageRoutingModule
  ],
  declarations: [AddClassRoomPage]
})
export class AddClassRoomPageModule {}
