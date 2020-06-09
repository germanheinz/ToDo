import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filterValid } from './todos/filter/filter.actions';
import { filterReducer } from './todos/filter/filter.reducer';


export interface AppState{
    todo  : Todo[],
    filter: filterValid
}

export const appReducers: ActionReducerMap<AppState> = {
    todo  : todoReducer,
    filter: filterReducer
};