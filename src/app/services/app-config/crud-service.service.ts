import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  public errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private configService: AppConfigService,
  ) { }

  // Return list
  public get(key: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.configService.getEndPoint()}/${key}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  public errorHandler(err: any) {
    err.error instanceof ErrorEvent
      ? this.errorMessage = err.error.message
      : this.errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`

    return throwError(() => this.errorMessage);
  }
}
