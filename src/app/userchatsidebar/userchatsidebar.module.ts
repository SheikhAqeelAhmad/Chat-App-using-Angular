import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserchatsidebarRoutingModule } from './userchatsidebar-routing.module';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule,
    UserchatsidebarRoutingModule
  ],
  exports:[
    UserlistComponent
  ]
})
export class UserchatsidebarModule { }
