import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'classroom',
    loadChildren: () => import('./classroom/classroom.module').then( m => m.ClassroomPageModule)
  },
  {
    path: 'add-class-room',
    loadChildren: () => import('./add-class-room/add-class-room.module').then( m => m.AddClassRoomPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'detail-classroom',
    loadChildren: () => import('./detail-classroom/detail-classroom.module').then( m => m.DetailClassroomPageModule)
  },
  {
    path: 'add-user-classroom',
    loadChildren: () => import('./add-user-classroom/add-user-classroom.module').then( m => m.AddUserClassroomPageModule)
  },
  {
    path: 'add-homework',
    loadChildren: () => import('./add-homework/add-homework.module').then( m => m.AddHomeworkPageModule)
  },
  {
    path: 'homework',
    loadChildren: () => import('./homework/homework.module').then( m => m.HomeworkPageModule)
  },
  {
    path: 'add-response',
    loadChildren: () => import('./add-response/add-response.module').then( m => m.AddResponsePageModule)
  },
  {
    path: 'detail-homework',
    loadChildren: () => import('./detail-homework/detail-homework.module').then( m => m.DetailHomeworkPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
