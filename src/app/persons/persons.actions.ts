import { Action } from '@ngrx/store';
import { IPerson } from '../models/person';

export enum PersonsActionTypes {
  LoadPersons = '[Persons] Load Persons',
  LoadPersonsSuccess = '[Persons] Load Persons Success',
  LoadPersonsFailure = '[Persons] Load Persons Failure',
}

export class LoadPersons implements Action {
  readonly type = PersonsActionTypes.LoadPersons;
}

export class LoadPersonsSuccess implements Action {
  readonly type = PersonsActionTypes.LoadPersonsSuccess;
  constructor(public payload: { items: IPerson[] }) { }
}

export class LoadPersonsFailure implements Action {
  readonly type = PersonsActionTypes.LoadPersonsFailure;
  constructor(public payload: { error: string }) { }
}

export type PersonsActions = LoadPersons | LoadPersonsSuccess | LoadPersonsFailure;

