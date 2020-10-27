import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoPageRoutingModule } from './todo-routing.module';

import { TodoPage } from './todo.page';

import { ReactiveFormsModule } from "@angular/forms"; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [TodoPage]
})
export class TodoPageModule {}
