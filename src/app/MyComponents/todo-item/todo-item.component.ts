import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  // @Input is used for accepting values passed from other/parent components.
  @Input() todo: Todo;

  @Input() i: number;

  // @Output is used for sending values passed from this component to other/parent component.
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  onDeleteClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onDeleteClick has been triggered.");
  }

  onCheckboxClick(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }

}
