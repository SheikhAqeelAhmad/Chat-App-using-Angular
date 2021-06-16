import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsercallsidebarRoutingModule } from './usercallsidebar-routing.module';
import { UserlistComponent } from './userlist/userlist.component';


console.warn("call side bar module");
@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule,
    UsercallsidebarRoutingModule
  ],
  exports:[
    UserlistComponent
  ]
})
export class UsercallsidebarModule { }
