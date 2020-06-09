import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create ToDo', props<{text: string}>());

export const editToggle = createAction('[TODO] Toggle toDo', props<{id: number}>());