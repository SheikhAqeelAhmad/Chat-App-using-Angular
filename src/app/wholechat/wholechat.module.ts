import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WholechatRoutingModule } from './wholechat-routing.module';
import { HeaderComponent } from './header/header.component';
import { InvitebuttonComponent } from './invitebutton/invitebutton.component';
import { WritechatComponent } from './writechat/writechat.component';


@NgModule({
  declarations: [HeaderComponent, InvitebuttonComponent, WritechatComponent],
  imports: [
    CommonModule,
    WholechatRoutingModule
  ],
  exports:[
    HeaderComponent,
    InvitebuttonComponent,
    WritechatComponent
  ]
})
export class WholechatModule { }
