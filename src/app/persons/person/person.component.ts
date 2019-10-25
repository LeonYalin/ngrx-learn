import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from '../../models/person';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoadPerson } from '../persons.actions';
import * as fromPersons from '../persons.reducer';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person$: Observable<IPerson>;
  error$: Observable<String>;
  private id: String;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.person$ = this.store.pipe(select(fromPersons.selectSelectedItem));
    this.error$ = this.store.pipe(select(fromPersons.selectItemsError));
    this.store.dispatch(new LoadPerson({ id: this.id }));
  }

}
