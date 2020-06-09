import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create ToDo', props<{text: string}>());

export const editToggle = createAction('[TODO] Toggle ToDo', props<{id: number}>());

export const edit = createAction('[TODO] Edit ToDo', props<{id: number, text: string}>());