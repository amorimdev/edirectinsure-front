import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
      .then(mod => mod.LoginModule),
    data: { title: 'Login' }
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module')
      .then(mod => mod.UsersModule),
    data: { title: 'Create User' }
  },
  {
    path: '',
    loadChildren: () => import('./pages/projects/projects.module')
      .then(mod => mod.ProjectsModule),
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
