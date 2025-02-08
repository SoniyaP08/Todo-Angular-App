import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common'; 
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent] 
})
export class TodosComponent {
  todos: Todo[];
  localItem: string;
  constructor()
  {
     this.localItem = localStorage.getItem("todos") || '';
   if(this.localItem==null)
     {
      this.todos=[];
     }
     else{
      try {
        this.todos = JSON.parse(this.localItem);
        console.log('Parsed todos:', this.todos); // Check the parsed todos array
      } catch (error) {
        console.error('Error parsing todos from localStorage:', error);
        this.todos=[];
     }
  }}
  deleteTodo(todo:Todo)
  {
     console.log(todo);
     const index=this.todos.indexOf(todo);
     this.todos.splice(index,1);
     localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo)
  {
     console.log(todo);
     this.todos.push(todo);
     localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo)
  {
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
