import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PersonsService } from './persons.service';
import { PersonsActionTypes, LoadPersonsSuccess, LoadPersonsFailure, LoadPerson, LoadPersonFailure, LoadPersonSuccess, SavePerson, SavePersonSuccess, SavePersonFailure } from './persons.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class PersonsEffects {

  @Effect()
  loadPersons$ = this.actions$.pipe(
    ofType(PersonsActionTypes.LoadPersons),
    switchMap(() => this.personsService.loadPersons()
      .pipe(
        map(persons => (new LoadPersonsSuccess({ items: persons }))),
        catchError((e) => of(new LoadPersonsFailure({ error: e })))
      ))
  )

  @Effect()
  loadPerson$ = this.actions$.pipe(
    ofType<LoadPerson>(PersonsActionTypes.LoadPerson),
    switchMap((action) => this.personsService.loadPerson(action.payload.id)
      .pipe(
        map(person => (new LoadPersonSuccess({ selectedItem: person }))),
        catchError((e) => of(new LoadPersonFailure({ error: e })))
      ))
  )

  @Effect()
  savePerson$ = this.actions$.pipe(
    ofType<SavePerson>(PersonsActionTypes.SavePerson),
    switchMap((action) => this.personsService.savePerson(action.payload.person)
      .pipe(
        map(person => (new SavePersonSuccess({ person: person }))),
        catchError((e) => of(new SavePersonFailure({ error: e })))
      ))
  )

  constructor(private actions$: Actions, private personsService: PersonsService) { }
}
