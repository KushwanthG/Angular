import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  

  login=new FormGroup({ 
    uname:new FormControl("Kushlu",[Validators.required,Validators.minLength(8)]),
    pwd:new FormControl("kushlu@gmail.com",[Validators.required,Validators.minLength(8)]) 
  })

  show(){
    console.log(this.login)
  }

}
