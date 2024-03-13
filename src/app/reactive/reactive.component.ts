import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  login=new FormGroup({ 
    username:new FormControl("u1",Validators.required,this.usernameCheck)
  })

  usernameCheck(control:any):Promise<any>{
    let response =new Promise((resolve, reject) => {
      let users=["u1","u2","u3"];
      let name = control.value;
      setTimeout(() => {
        if (users.indexOf(name) > 0) {
          resolve({ "dulipateuser": true });
        }
        else {
          resolve(null);
        }
      });
    });
    return response
  }
  
  show(){
    console.log(this.login)
  }

}
