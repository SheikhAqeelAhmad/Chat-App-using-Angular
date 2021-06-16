import { Component, OnInit,Output,EventEmitter,ViewChild } from '@angular/core';

@Component({
  selector: 'app-writechat',
  templateUrl: './writechat.component.html',
  styleUrls: ['./writechat.component.css']
})
export class WritechatComponent implements OnInit {
@Output() getTypedMsg:EventEmitter <any> = new EventEmitter();
 @ViewChild('txtarea') inputName:any // accessing the reference element
  constructor() { }
  
   arrData : string[] = [];
sendmsg(msg:any){
console.warn(this.arrData.push(msg));
this.getTypedMsg.emit(this.arrData);
this.inputName.nativeElement.value = ' ';






}
 
  ngOnInit(): void {
   
  }

}
