import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  sno: number = 0;
  title: string;
  desc: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();


  onSubmit() {
    this.sno++;
    const todo = {
      sno: this.sno,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.clearInput();
  }

  clearInput() {
    this.title = '';
    this.desc = '';
  }

}