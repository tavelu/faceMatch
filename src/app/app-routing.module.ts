import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfieComponent } from './selfie/selfie.component';
import { ResultsComponent } from './results/results.component';
import {UserListComponent } from './user-list/user-list.component'
import {UserDetailComponent} from './user-detail/user-detail.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'userList'
  },
  {
    path: 'selfie',
    component: SelfieComponent
  },
  {
    path: 'detail/:id', 
    component: UserDetailComponent 
  },
  {
    path:'userList',
    component: UserListComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
