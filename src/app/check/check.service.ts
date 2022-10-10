import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Check } from './check';
@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private apiURL = "http://localhost:8080/api/v1";
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/checks')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(check:Check): Observable<any> {
  
    return this.httpClient.post(this.apiURL + '/check', JSON.stringify(check), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )

  }  

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + '/check/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, check:Check): Observable<any> {
  
    return this.httpClient.put(this.apiURL + '/check/' + id, JSON.stringify(check), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }
      
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/checks/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
