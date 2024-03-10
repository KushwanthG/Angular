import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-foam',
  templateUrl: './foam.component.html',
  styleUrls: ['./foam.component.css']
})
export class FoamComponent {

  show(f: any){

    f.control.patchValue({
      "username":"s"
  
    })
    console.log(f.value);

    f.setValue({
      'personal':{
      'password': "gondi",
      "username":"kush"}
    })
    console.log(f.value);
  
  }


}
