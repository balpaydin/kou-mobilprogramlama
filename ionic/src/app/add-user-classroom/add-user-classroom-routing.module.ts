import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserClassroomPage } from './add-user-classroom.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserClassroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserClassroomPageRoutingModule {}
