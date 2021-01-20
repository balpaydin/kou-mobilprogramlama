import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailClassroomPage } from './detail-classroom.page';

const routes: Routes = [
  {
    path: '',
    component: DetailClassroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailClassroomPageRoutingModule {}
