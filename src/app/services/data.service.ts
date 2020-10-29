import { Injectable } from '@angular/core';

import { Todo } from "src/app/interfaces/todo/todo"; 

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoArray: Todo[] = [];
  dataName: string = "todos"; 

  constructor(private storage: Storage) { 
    this.getData(this.dataName).then((todos) => { 
      if (todos) {
        this.todoArray = todos; 
      }
    }); 
  }

  getData(name: string) {
    return this.storage.get(name); 
  }

  setData(name: string, data: Todo[]) {
    this.storage.set(name, data); 
  }

  addTodo(todoObject: Todo) {
    if (todoObject != null) {
      this.todoArray.push(todoObject);
      console.log(this.todoArray); 

      this.setData(this.dataName, this.todoArray); 

      return this.todoArray; 
    } else {

      // return false; 
      alert("Field required!");
    }
  }

  deleteItem(todo) {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log("delete item");
      }
    }

    this.setData(this.dataName, this.todoArray); 

    return this.todoArray; 
  }

  remaining() {
    let count = 0; 

    for (let i = 0; i < this.todoArray.length; i++){
      count += this.todoArray[i].done ? 0 : 1; 
    }

    return count; 
  }

  removeAll() {
    this.todoArray = []; 
    this.setData(this.dataName, this.todoArray); 

    return this.todoArray; 
  }

  archive() {
    let oldTodos = this.todoArray; 

    this.todoArray = []; 

    for (let i = 0; i < oldTodos.length; i++){
      if (!oldTodos[i].done) {
        this.todoArray.push(oldTodos[i]); 
      }
    }

    this.setData(this.dataName, this.todoArray); 
  }

  // refresh(checkedTodo: string) {
  //   // this.todoArray = checkedTodo; 
  //   // this.setData(this.dataName, this.todoArray); 
  //   // return this.todoArray; 
  // }

}
