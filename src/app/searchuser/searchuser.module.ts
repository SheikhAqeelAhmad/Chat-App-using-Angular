import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchuserRoutingModule } from './searchuser-routing.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchuserRoutingModule
  ],
  exports:[
    SearchComponent
  ]
})
export class SearchuserModule { }
