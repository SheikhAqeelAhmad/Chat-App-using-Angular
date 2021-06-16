import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { BasicprofileComponent } from './basicprofile/basicprofile.component';



@NgModule({
  declarations: [BasicprofileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports:[
    BasicprofileComponent
  ]
})
export class ProfileModule { }
