import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddResponsePageRoutingModule } from './add-response-routing.module';

import { AddResponsePage } from './add-response.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddResponsePageRoutingModule
  ],
  declarations: [AddResponsePage]
})
export class AddResponsePageModule {}
