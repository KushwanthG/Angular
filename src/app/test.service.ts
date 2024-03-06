import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  constructor() { }
  products=[
    {
      id:1,
      name:'RRR',
      img:"src/assets/rrr.jpg",
      price:1200,
      category:"Bromance"

    },
    {
      id:2,
      name:'KGF',
      img:"C:\Users\kushl\Desktop\Angular\angular-practice\src\assets\kgf.jpg",
      price:1100,
      info:"DIRECTED BY NEEL",
      category:"Heroic"

    },
    {
      id:3,
      name:'BAAHUBALI',
      price:1750,
      img:"C:\Users\kushl\Desktop\Angular\angular-practice\src\assets\bb.jpg",
      info:"DIRECTED BY SSR",
      category:"Perodic"

    }
  ]
}
