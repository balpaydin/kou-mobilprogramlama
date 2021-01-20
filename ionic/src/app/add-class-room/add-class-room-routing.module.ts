import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddClassRoomPage } from './add-class-room.page';

const routes: Routes = [
  {
    path: '',
    component: AddClassRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddClassRoomPageRoutingModule {}
