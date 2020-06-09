import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;

  constructor( private store: Store<AppState>) { 
    this.textInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  add(){
    // console.log(this.textInput.valid);
    // console.log(this.textInput.value);
    if (this.textInput.invalid) { return; }
    this.store.dispatch(actions.create(Text = this.textInput.value), );
    this.textInput.reset();

  }

}
