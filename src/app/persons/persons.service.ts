import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPerson } from '../models/person';

@Injectable()
export class PersonsService {
  private API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  loadPersons(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(`${this.API_URL}/users`);
  }

  loadPerson(id: String): Observable<IPerson> {
    return this.http.get<IPerson>(`${this.API_URL}/users/${id}`);
  }

  savePerson(person: IPerson) {
    return this.http.post<IPerson>(`${this.API_URL}/users/`, JSON.stringify(person), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    });
  }
}
