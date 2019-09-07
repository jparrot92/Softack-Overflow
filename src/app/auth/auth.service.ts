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
  user: User;
  token: string;

  constructor(private http: HttpClient, private router: Router) {
    this.usersUrl = urljoin(environment.apiUrl, 'auth');
  }

  signIn(user: User): Observable<any> {
    return this.http.post(urljoin(this.usersUrl, 'signin'), user).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  signUp(user: User): Observable<any> {
    return this.http.post(urljoin(this.usersUrl, 'signup'), user).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  login = ({ token, userId, firstName, lastName, email }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ userId, firstName, lastName, email }));
    this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }

  getUser() {
    if (this.isLoggedIn()) {
      return this.user = JSON.parse(localStorage.getItem('user'));
    }
    return null;
  }

}
