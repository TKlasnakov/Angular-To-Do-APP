import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-created-to-dos',
  templateUrl: './created-to-dos.component.html',
  styleUrls: ['./created-to-dos.component.scss']
})
export class CreatedToDosComponent {
  @Input() toDos: any[];
}
