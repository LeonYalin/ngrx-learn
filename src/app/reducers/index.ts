import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPersons from '../persons/persons.reducer';


export interface AppState {
  [fromPersons.personsFeatureKey]: fromPersons.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromPersons.personsFeatureKey]: fromPersons.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
