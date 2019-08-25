import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Question } from './question';

import { environment } from '@env/environment';

import urljoin from 'url-join';

@Injectable()
export class QuestionService {

  questionsUrl: string;

  constructor(private http: HttpClient) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions');
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  getQuestion(id): Observable<Question> {
    const url = urljoin(this.questionsUrl, id);
    return this.http.get<Question>(url).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.questionsUrl, question).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

}
