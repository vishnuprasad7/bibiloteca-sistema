import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, IBooks } from './books.model';
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
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }),
    );
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.booksUrl + id);
  }
}
