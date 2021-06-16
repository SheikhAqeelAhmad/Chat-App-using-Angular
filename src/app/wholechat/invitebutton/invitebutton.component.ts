import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-invitebutton',
  templateUrl: './invitebutton.component.html',
  styleUrls: ['./invitebutton.component.css']
})
export class InvitebuttonComponent implements OnInit {
@Input() hero:any;
  constructor() { }
myDate = new Date();
  ngOnInit(): void {
  }

}
