import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { filterValid } from '../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDos: Todo[] = [];
  currentFilter: filterValid;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // Comment this line, because I need the entire another Refucer, Filter
    // this.store.select('todo').subscribe(todo => this.toDos = todo);
    this.store.subscribe(({todo, filter}) => {
      this.toDos         = todo;
      this.currentFilter = filter;
    });

  }



}
