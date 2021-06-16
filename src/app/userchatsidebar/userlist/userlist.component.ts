import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersApiService } from '../../users-api.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Output() chatTitleWithImg: EventEmitter<any> = new EventEmitter;

  constructor(private userApiserv: UsersApiService) { }
  allApiData: any;
  ngOnInit(): void {
   

    const checkdata = this.userApiserv.getUserApi();
    // console.warn(checkdata);
    this.userApiserv.getUserApi().subscribe(apiData => {
      console.warn(apiData);
      this.allApiData = apiData;
    })


  }
  chattitle(chattitle: any) {
    this.chatTitleWithImg.emit(chattitle);
    //alert(chattitle);
  }

}
