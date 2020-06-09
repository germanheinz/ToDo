import { createAction, props } from '@ngrx/store';

export type filterValid = 'all' | 'completed' | 'active';

export const increment = createAction('[Filter] Set Filter', props<{filter: filterValid}>());