import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoItemComponent {
   @Input()
  todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> =new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> =new EventEmitter();
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }
  onCheckboxClick(todo: Todo)
  {
    console.log(todo);
     this.todoCheckbox.emit(todo);
  }
}
