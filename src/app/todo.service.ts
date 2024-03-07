import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskid=3;

  constructor() { }

  todolist=[
    {
      id:1,'task':'RRR'
    },
    {
      id:2,'task':'KGF'
    }
  ]


  addTodo(taskName: any){
    this.todolist.push({"id":this.taskid++,"task":taskName})
  }


  deleteTodo(index: number){
    this.todolist.splice(index,1)
  }
}
