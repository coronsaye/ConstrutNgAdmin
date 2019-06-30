import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import {AuthGuardService as AuthGuard, AuthGuardService } from './services/auth-guard.service';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'customer',

        loadChildren: './modules/customer/customer.module#CustomerModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      }
      ,
      {
        path: 'user',
        loadChildren: './modules/user/user.module#UsersModule'
      },
      {
        path: 'user-groups',
        loadChildren: './modules/user-groups/user-groups.module#UserGroupsModule'
      }
      ,
      {
        path: 'user-group-actions',
        loadChildren: './modules/user-group-actions/user-group-actions.module#UserGroupActionsModule'
      }
      ,
      {
        path: 'product',
        loadChildren: './modules/product/product.module#ProductModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
