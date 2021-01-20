import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailHomeworkPage } from './detail-homework.page';

const routes: Routes = [
  {
    path: '',
    component: DetailHomeworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailHomeworkPageRoutingModule {}
