import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() createdToDo;
  toDos = [];

  createToDo(item) {
    const toDoInfo = {
      value: item,
      id: this.toDos.length + 1
    };
    this.toDos.push(toDoInfo);
  }
}
