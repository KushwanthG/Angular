import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  constructor(private ts:TodoService){
  }

  todo:any=[];
 ngOnInit():void{
  this.todo=this.ts.todolist
 }

 removeTodo(index: number){
  this.ts.deleteTodo(index)
 }

}
