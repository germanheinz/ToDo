import { createReducer, on } from '@ngrx/store';
// import * as actions from '../filter/filter.actions';
import { filterValid, setFilter } from './filter.actions';


export const initialState: filterValid = 'all';

const _filterReducer = createReducer(initialState,
    on(setFilter, (state, {filter}) => filter),
);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}

