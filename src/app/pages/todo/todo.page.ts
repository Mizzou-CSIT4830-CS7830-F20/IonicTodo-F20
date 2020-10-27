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
  todoArray = [];

  constructor(private formBuilder: FormBuilder, private model: DataService) {
    this.todoForm = this.formBuilder.group({
      todo: ["", Validators.required],
      done: false
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
}
