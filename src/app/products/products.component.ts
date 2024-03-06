import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any=[];
  constructor(private ts:TestService,private ar:ActivatedRoute){
    this.ar.queryParamMap.subscribe((list)=>{
      let category=list.get('category')
      if(category){
        this.products=this.ts.products.filter((p,i,paar)=>{return p.category==category})
      }
      else{
        this.products=ts.products;
      }
    })
  }
}
