import { PersonsActionTypes, PersonsActions } from './persons.actions';
import { IPerson, Person } from '../models/person';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const personsFeatureKey = 'persons';

export interface State {
  items: IPerson[];
  selectedItem: Person,
  error: String;
}

export const initialState: State = {
  items: [],
  selectedItem: null,
  error: null,
};

export function reducer(state = initialState, action: PersonsActions): State {
  switch (action.type) {
    case PersonsActionTypes.LoadPersons:
      return { ...state };
    case PersonsActionTypes.LoadPersonsSuccess:
      return { ...state, items: action.payload.items };
    case PersonsActionTypes.LoadPersonsFailure:
      return { ...state, error: action.payload.error.message };
    case PersonsActionTypes.LoadPerson:
      return { ...state, selectedItem: null };
    case PersonsActionTypes.LoadPersonSuccess:
      return { ...state, selectedItem: action.payload.selectedItem };
    case PersonsActionTypes.LoadPersonFailure:
      return { ...state, error: action.payload.error.message };
    default:
      return state;
  }
}

export const selectPersons = createFeatureSelector<AppState, State>(personsFeatureKey);
export const selectItems = createSelector(
  selectPersons,
  (state: State) => state.items
);
export const selectItemsError = createSelector(
  selectPersons,
  (state: State) => state.error
);
export const selectSelectedItem = createSelector(
  selectPersons,
  (state: State) => state.selectedItem
);
