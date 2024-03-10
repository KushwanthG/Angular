import { Component } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  
  constructor(private ms:MobileService){

  }

  mobiles:any=null;

  formHeader ="Add mobile";
  showForm=false;
  userId: any;
  date: any;
  id: any;


  ngOnInit(): void {
      this.getMobiles()  
  }

  getMobiles(){
    this.ms.fetchMobile().subscribe(
      (data)=>{
        this.mobiles = data;
      },
      (err)=>{
        console.log("error")
      }
    )  
  }


  deleteMobile(id: any){
    this.ms.deleteMobile(id).subscribe(
      (res)=>{

        this.getMobiles()

      }
    )
  }

  openForm(data=null){
    this.showForm=true;
    
  }
  clearForm() {
    this.id=null;
      this.userId=null;
      this.date=null;
  }

  closeForm(){
    this.showForm = false;
    this.clearForm()
  }

 

  saveMobile(){


  }
  
}
