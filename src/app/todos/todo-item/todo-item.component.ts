import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

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

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.toDo.completed = true;
    console.log(this.toDo.completed);
    console.log(this.checkCompleted);

    this.checkCompleted = new FormControl(this.toDo.completed);
    this.textInput      = new FormControl(this.toDo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe( value => {
        this.store.dispatch(actions.editToggle({id: this.toDo.id}));
    });
  }
  editToDo(){
    console.log('click!');
    this.editing = true;
    this.textInput.setValue(this.toDo.text);

    setTimeout(() => {
      this.textInputFisic.nativeElement.focus();
    }, 1);
  }

  endingEdition(){
    this.editing = false;

    if (this.textInput.invalid) { return; }
    if (this.textInput.value === this.toDo.text) { return; }

    this.store.dispatch(actions.edit({
      id: this.toDo.id,
      text: this.textInput.value
    })
    );
  }
}
