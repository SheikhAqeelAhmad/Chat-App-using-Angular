import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProfileModule} from './profile/profile.module';
import {SearchuserModule} from './searchuser/searchuser.module';

import {UserchatsidebarModule} from './userchatsidebar/userchatsidebar.module';
import {WholechatModule} from './wholechat/wholechat.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    NgbModule,
    SearchuserModule,
    HttpClientModule,
   
    UserchatsidebarModule,
    WholechatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
