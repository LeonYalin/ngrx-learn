import { Action } from '@ngrx/store';
import { IPerson } from '../models/person';
import { HttpErrorResponse } from '@angular/common/http';

export enum PersonsActionTypes {
  LoadPersons = '[Persons] Load Persons',
  LoadPersonsSuccess = '[Persons] Load Persons Success',
  LoadPersonsFailure = '[Persons] Load Persons Failure',
  LoadPerson = '[Person] Load Person',
  LoadPersonSuccess = '[Person] Load Person Success',
  LoadPersonFailure = '[Person] Load Person Failure',
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
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export class LoadPerson implements Action {
  readonly type = PersonsActionTypes.LoadPerson;
  constructor(public payload: { id: String }) { }
}

export class LoadPersonSuccess implements Action {
  readonly type = PersonsActionTypes.LoadPersonSuccess;
  constructor(public payload: { selectedItem: IPerson }) { }
}

export class LoadPersonFailure implements Action {
  readonly type = PersonsActionTypes.LoadPersonFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export type PersonsActions =
  LoadPersons | LoadPersonsSuccess | LoadPersonsFailure |
  LoadPerson | LoadPersonSuccess | LoadPersonFailure;

