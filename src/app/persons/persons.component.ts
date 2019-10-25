import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from '../models/person';
import { LoadPersons } from './persons.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import * as fromPersons from './persons.reducer';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonsComponent implements OnInit {
  persons$: Observable<IPerson[]>;
  error$: Observable<String>;

  constructor(private store: Store<AppState>) {
    this.persons$ = this.store.pipe(select(fromPersons.selectItems));
    this.error$ = this.store.pipe(select(fromPersons.selectItemsError));
  }

  ngOnInit() {
    this.store.dispatch(new LoadPersons());
  }

}
