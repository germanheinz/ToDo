import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] create todo', props<{text: string}>());