import { PersonsActionTypes, PersonsActions } from './persons.actions';
import { IPerson } from '../models/person';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const personsFeatureKey = 'persons';

export interface State {
  items: IPerson[];
  error: string;
}

export const initialState: State = {
  items: [],
  error: null,
};

export function reducer(state = initialState, action: PersonsActions): State {
  switch (action.type) {
    case PersonsActionTypes.LoadPersons:
      return { ...state };
    case PersonsActionTypes.LoadPersonsSuccess:
      return { ...state, items: action.payload.items };
    case PersonsActionTypes.LoadPersonsFailure:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}

export const selectPersons = createFeatureSelector<AppState, State>(personsFeatureKey);
export const selectPersonsItems = createSelector(
  selectPersons,
  (state: State) => state.items
);
export const selectPersonsError = createSelector(
  selectPersons,
  (state: State) => state.error
);
