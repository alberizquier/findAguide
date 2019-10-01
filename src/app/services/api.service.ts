import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { User } from '../models/user';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3000';

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createUser(): Observable<User> {
    return this.http.post<User>(this.apiURL + '/users/registerForm', User);
  }
  userLogin(): Observable<User> {
    return this.http.post<User>(this.apiURL + '/users/login', User)
  }
  editUser(id, user): Observable<User> {
    return this.http.put<User>(this.apiURL + '/users/:uid' + id, user);
  }
  deleteUser(id): Observable<boolean> {
    return this.http.delete<boolean>(this.apiURL + '/users/:uid' + id);
  }

}
