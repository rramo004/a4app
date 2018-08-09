
import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { UnexpectedError } from '../common/unexpected-error';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .pipe (
      map(response => response.json()),
      catchError(this.handlerErrror)
      
    );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      map(response => response.json()),
      catchError(this.handlerErrror)
    );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
    .pipe (
      map(response => response.json()),
      catchError(this.handlerErrror)
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe (
      map(response => response.json()),
      catchError(this.handlerErrror)
    );
      
  }

  private handlerErrror(error: Response) {
    if (error.status === 404) 
      return throwError(new NotFoundError());
    if (error.status === 400)
      return throwError(new UnexpectedError(error.json()));
  
    return throwError(new AppError(error.json()));
  }
}
