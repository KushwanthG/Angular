import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private r:Router,private ar:ActivatedRoute){
  }
  navigate(){
    this.r.navigate(['/home',2,'js'],{queryParams:{'page':7,"size":10}})
  }
}
