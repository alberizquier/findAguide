import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { User } from '../models/user';
import { retry, catchError } from 'rxjs/operators';
import { UserData } from '../api/userApi';


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
//USERS CRUD methods
  createUser(userInfo): Observable<User> {
    return this.http.post<User>(this.apiURL + '/users/registerForm', userInfo).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  userLogin(user) {
    return this.http.post(this.apiURL + '/users/login', user);
  }
  editUser(id, user): Observable<User> {
    return this.http.put<User>(this.apiURL + '/users/:uid' + id, user);
  }
  getUser(email){
    return this.http.get(this.apiURL + '/users/' + email)
  }
  deleteUser(id): Observable<boolean> {
    return this.http.delete<boolean>(this.apiURL + '/users/:uid' + id);
  }
  getAllGuiders(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL + '/users');
  }
  getTours(id) {
    return this.http.get(this.apiURL + '/tours/:gid');
  }
// User's Aux methods
    // Error handling
    handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }

/*
FILTERS TO DO:

Destination + busyDates
Destination + Tourinterest
Destination + Language + BusyDates
Destination + Language + Interest
Destination + BusyDates + Interest
Destination + Language + BusyDates + Interest
*/

//Filter By Location
   findByLocation(location): Observable<UserData> {
     //console.log(this.apiURL + '/guider/destinationloc/' + location)
    return this.http.get<UserData>(this.apiURL + '/guider/destinationloc/' + location);
   }


   //Filter By Language & Location
   findByLanguageAndLocation(location,language) {
    return this.http.get(this.apiURL + '/guider/destinationll/'+ location +"/"+ language);
   }



}
