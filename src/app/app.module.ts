import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import {FormsModule} from '@angular/forms';
import { CreatedToDosComponent } from './created-to-dos/created-to-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoInputComponent,
    CreatedToDosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
