import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBooks } from './books.model';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksUrl = 'api/books/';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBooks[]> {
    return this.http.get<IBooks[]>(this.booksUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }),
    );
  }
  addBooksToInventory(book: any) {
    // this.books.push(book);
  }
}
