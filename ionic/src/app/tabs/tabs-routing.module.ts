import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'homework',
        loadChildren: () => import('../homework/homework.module').then(m => m.HomeworkPageModule)
      },
      {
        path:"classroom",
        loadChildren:()=>import("../classroom/classroom.module").then(m=>m.ClassroomPageModule)
      },
      {
        path:"settings",
        loadChildren:()=> import("../settings/settings.module").then(m=>m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/homework',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/homework',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
