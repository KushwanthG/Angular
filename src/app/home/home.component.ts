import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
movies: any;

  constructor(private ts:TestService){
  }
  products=this.ts.products;

}
