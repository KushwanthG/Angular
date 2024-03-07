import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  data:any=[];

  myobs=new Observable((listener)=>{
    listener.next(1),
    listener.next(2),
    setTimeout(()=>{listener.next(3),1000}),
    setTimeout(()=>listener.error(4),1000),
    setTimeout(()=>listener.error(),200),
    setTimeout(()=>listener.complete(),1000)
  })

  test(){
    this.myobs.subscribe( data=>console.log(data), (err)=>console.log(err), ()=>console.log('completed') )
  }

  constructor(private http:HttpClient){
  }
  getData(){
    this.http.get("https://fakestoreapi.com/products?limit=5")
    .subscribe((data)=>{
      this.data=data
      console.log(this.data)}
    )
  }
}
