import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() toDo: Todo;
  @ViewChild('inputFisic', {static: false}) textInputFisic: ElementRef;

  checkCompleted: FormControl;
  textInput     : FormControl;
  editing       = false;

  constructor() { }

  ngOnInit(): void {
    // this.toDo.completed = true;
    console.log(this.toDo.completed);
    console.log(this.checkCompleted);

    this.checkCompleted = new FormControl(this.toDo.completed);
    this.textInput      = new FormControl(this.toDo.text, Validators.required);
  }
  editToDo(){
    console.log('click!');
    this.editing = true;

    setTimeout(() => {
      this.textInputFisic.nativeElement.focus();
    }, 1);
  }

  endingEdition(){
    this.editing = false;
  }
}
