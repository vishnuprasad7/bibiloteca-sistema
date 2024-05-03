import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveData,
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BooksService } from './books.service';
import { BookResolved } from './books.model';

@Injectable({
  providedIn: 'root',
})
export class BookResolver implements Resolve<BookResolved> {
  constructor(private bookservice: BooksService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<BookResolved> {
    let id = Number(route.paramMap.get('id'));
    // console.log(+id);
    if (isNaN(+id)) {
      const message = `Book id was not a number: ${id}`;
      console.error(message);
      return of();
    }

    return this.bookservice.getBook(+id).pipe(
      map((book) => ({ book })),
      catchError((error) => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of();
      })
    );
  }
}
