import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = 1;
  title = 'skypeClone';
sendtypeMsg="";
chattitlearray="";
sendchattitlearray="";
  getTypedMsg(typemsg:any){
//console.warn(typemsg);
this.sendtypeMsg = typemsg;
  }

  chatTitleArray(chattitlearray:any){
    this.sendchattitlearray = chattitlearray;
    //console.warn(chattitlearray)
  }

  
  
}


