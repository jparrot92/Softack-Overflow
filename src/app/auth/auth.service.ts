import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@env/environment';

import urljoin from 'url-join';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  usersUrl: string;
  currentUser?: User;


  constructor(private http: HttpClient, private router: Router) {
    this.usersUrl = urljoin(environment.apiUrl, 'auth');
    if (this.isLoggedIn()) {
      const { userId, email, firstName, lastName } = JSON.parse(localStorage.getItem('user'));
      this.currentUser = new User(email, null, firstName, lastName, userId);
    }
  }

  signIn(user: User): Observable<any> {
    return this.http.post(urljoin(this.usersUrl, 'signin'), user).pipe(
        catchError(e => {
          return throwError(e);
        })
      );
  }

  login = ({ token, userId, firstName, lastName, email }) => {
    this.currentUser = new User(email, null, firstName, lastName);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ userId, firstName, lastName, email }));
    this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.clear();
    this.currentUser = null;
    this.router.navigateByUrl('/');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error ocurred: ', error.error.message);
    } else {
      console.error(
        error.error
      );
    }

    return throwError(
      'something bad happened; please try again later.'
    );
  }

}
