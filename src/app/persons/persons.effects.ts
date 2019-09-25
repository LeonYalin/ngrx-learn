import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PersonsService } from './persons.service';
import { PersonsActionTypes, LoadPersonsSuccess, LoadPersonsFailure } from './persons.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class PersonsEffects {

  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType(PersonsActionTypes.LoadPersons),
    switchMap(() => this.personsService.loadPersons()
      .pipe(
        map(persons => (new LoadPersonsSuccess({ items: persons }))),
        catchError((e) => of(new LoadPersonsFailure({ error: e })))
      ))
  )

  constructor(private actions$: Actions, private personsService: PersonsService) { }

}
