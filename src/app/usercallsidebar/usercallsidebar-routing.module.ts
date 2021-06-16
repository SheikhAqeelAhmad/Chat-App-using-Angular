import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserlistComponent} from './userlist/userlist.component'

const routes: Routes = [
  {
    path:'callsidebar',
    component:UserlistComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  
  ],
  exports: [RouterModule]
})
export class UsercallsidebarRoutingModule { }
