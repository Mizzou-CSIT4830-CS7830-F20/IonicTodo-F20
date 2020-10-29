import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Todo } from "src/app/interfaces/todo/todo"; 

import { DataService } from "src/app/services/data.service"; 

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  private todoForm: FormGroup;
  todoArray: Todo[] = [];

  constructor(private formBuilder: FormBuilder, private model: DataService) {
    this.todoForm = this.formBuilder.group({
      todo: ["", Validators.required],
      done: false
    });

    // this needs to be updated for challenge ... accessing the ionic storage
    //  must be in the model 
    this.model.getData("todos").then((todos) => {
      if (todos) {
        this.todoArray = todos; 
      }
    }); 
  }

  ngOnInit() {
  }

  addTodo() {
    this.todoArray = this.model.addTodo(this.todoForm.value); 
  }

  deleteItem(todo) {
    this.todoArray = this.model.deleteItem(todo); 
  }

  remaining() {
    return this.model.remaining(); 
  }

  removeAll() {
    this.todoArray = this.model.removeAll(); 
  }

  archive() {
    this.model.archive(); 
  }

  refresh(checked) {
    console.dir(checked); 

    console.dir(this.todoArray); 

    // this.todoArray = this.model.refresh(this.todoArray); 

    // console.dir(this.todoArray); 

    console.dir(this.model.todoArray)
    
    // console.dir(this.todoForm.value); 

    // this.model.getData("todos").then((todos) => {
    //   if (todos) {
    //     console.dir(todos); 
    //   }
    // }); 

  }
}
