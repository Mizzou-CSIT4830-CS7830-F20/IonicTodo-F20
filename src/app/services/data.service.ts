import { Injectable } from '@angular/core';

import { Todo } from "src/app/interfaces/todo/todo"; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoArray = [];

  constructor() { }

  addTodo(todoObject: Todo) {
    if (todoObject != null) {
      this.todoArray.push(todoObject);

      console.log(this.todoArray); 

      return this.todoArray; 
    } else {

      return false; 
      // alert("Field required!");
    }
  }

  deleteItem(todo) {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log("delete item");
      }
    }

    return this.todoArray; 
  }
}
