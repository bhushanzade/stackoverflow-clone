import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StackExchnageService {

  private searchQuestion = new Subject<any>();

  constructor(private http: HttpClient) { }

  public searchQuestion$ = this.searchQuestion.asObservable();

  stackSearchQuestion(data) {
    this.searchQuestion.next(data);
  }

  private extractData(res: HttpResponse<Object>) {
    let response = res.body;
    return response;
  }

  _error(error: HttpErrorResponse): any {
    return throwError(error.message);
  }

  getAllSearchDataForHome(params: any) {
    const url = 'https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow&order=desc&sort=votes&accepted=True';
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(url, { headers: headers, observe: 'response', params, responseType: 'json' }).pipe(
      map(this.extractData),
      catchError(e => this._error(e))
    )
  }

  getAllSearchData(params: any) {
    const url = 'https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow&filter=!3zl2.7_iPgFSdJRTP';
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(url, { headers: headers, observe: 'response', params, responseType: 'json' }).pipe(
      map(this.extractData),
      catchError(e => this._error(e))
    )
  }

  getTotalCountSearchData(params: any) {
    const url = 'https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow&filter=total';
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(url, { headers: headers, observe: 'response', params, responseType: 'json' }).pipe(
      map(this.extractData),
      catchError(e => this._error(e))
    )
  }


  getAllQuestions(params: any) {
    const url = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow&filter=!3zl2.7_iPgFSdJRTP';
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(url, { headers: headers, observe: 'response', params, responseType: 'json' }).pipe(
      map(this.extractData),
      catchError(e => this._error(e))
    )
  }

  getTotalCountOfQuestions(params: any) {
    const url = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow&filter=total';
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(url, { headers: headers, observe: 'response', params, responseType: 'json' }).pipe(
      map(this.extractData),
      catchError(e => this._error(e))
    )
  }


  getQuestionDetailByID(id, params?: any) {
    const url = 'https://api.stackexchange.com/2.2/questions/' + id;
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(url, { headers: headers, observe: 'response', params, responseType: 'json' }).pipe(
      map(this.extractData),
      catchError(e => this._error(e))
    )
  }

  getAnswersByQuestion(qid, params?: any) {
    const url = 'https://api.stackexchange.com/2.2/questions/' + qid + '/answers';
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(url, { headers: headers, observe: 'response', params, responseType: 'json' }).pipe(
      map(this.extractData),
      catchError(e => this._error(e))
    )
  }

  getIdLocalJson() {
    return this.http.get("assets/test_id.json").pipe(map(
      res => { return res; }
    ));
  }

  getLocalJson() {
    return this.http.get("assets/test.json").pipe(map(
      res => { return res; }
    ));
  }



  loginauth() {
    const url = 'https://stackoverflow.com/oauth';
    const params: any = {
      client_id: 19842,
      redirect_uri: 'http://localhost:4200'
    }

    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.get(url, { headers: headers, observe: 'response', params, responseType: 'json' }).pipe(
      map(this.extractData),
      catchError(e => this._error(e))
    )

  }
}