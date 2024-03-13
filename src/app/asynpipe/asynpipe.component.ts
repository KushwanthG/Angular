import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-asynpipe',
  templateUrl: './asynpipe.component.html',
  styleUrls: ['./asynpipe.component.css']
})
export class AsynpipeComponent {
  users: any;
  s1:Array<any>;
  constructor(private http:HttpClient){
    this.s1=[2,'3'];
  }
  ngOnInit(){
    this.users=this.http.get("https://jsonplaceholder.typicode.com/users")
    // .subscribe( (data)=>{  this.users=data }  )
  }


 


  
}
