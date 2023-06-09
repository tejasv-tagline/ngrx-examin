import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'teacher',
    loadChildren: () => import('./feature/teacher/teacher.module').then(m => m.TeacherModule),
    // canLoad:[AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
