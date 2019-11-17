import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent {
  @Output() createToDoChange = new EventEmitter<string>();
  newToDo: string;

  addNewToDo(): void {
    this.createToDoChange.emit(this.newToDo);
  }
}
