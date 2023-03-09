import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './task';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public errorMessage: string = '';

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  constructor(
    private http: HttpClient,
    private configService: AppConfigService,
  ) { }

  // Return list
  public get(): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${this.configService.getEndPoint()}/task`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  public errorHandler(err: any) {
    err.error instanceof ErrorEvent
      ? this.errorMessage = err.error.message
      : this.errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`

    return throwError(this.errorMessage);
  }
}
