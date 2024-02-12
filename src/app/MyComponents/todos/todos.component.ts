import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  // todos is an array of type Todo.

  localItem: string;
  todos: Todo[];

  constructor() {

    // Using array.
    // this.todos = [
    // {
      //   sno: 1,
      //   title: "This is title 1",
      //   desc: "Description 1",
      //   active: true

    // },

    // {
    //   sno: 2,
    //   title: "This is title 2",
    //   desc: "Description 2",
    //   active: true

    // },

    // {
    //   sno: 3,
    //   title: "This is title 3",
    //   desc: "Description 3",
    //   active: true

    // }
    // ]

    // Using LocalStorage.
    this.localItem = localStorage.getItem("todos")!;

    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }

  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
