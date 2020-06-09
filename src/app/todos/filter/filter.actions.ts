import { createAction, props } from '@ngrx/store';

export type filterValid = 'all' | 'completed' | 'active';

export const setFilter = createAction('[Filter] Set Filter', props<{filter: filterValid}>());