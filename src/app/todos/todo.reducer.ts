
import { createReducer, on } from '@ngrx/store';
import { create } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState: Todo[] = [
  new Todo('test 1'),
  new Todo('test 2'),
  new Todo('test 3'),
  new Todo('test 4')
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(initialState,
    on(create, (state, {text})  => [...state, new Todo(text)]),
  );

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

// ... = Operador Spread. extrae cada uno de los items y regresalo de forma independiente
// Agrego finalmente el nuevo TODO instanciandolo