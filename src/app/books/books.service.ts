import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBooks } from './books.model';
import { Observable, catchError, map, of, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksUrl = '/api/books';
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

  getBook(id: number): Observable<IBooks> {
    if (id === 0) {
      return of(this.initializeBook());
    }
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<IBooks>(url).pipe(
      tap((data) => console.log('Book: ' + JSON.stringify(data))),
      catchError(this.handleError),
    );
  }

  createBook(book: IBooks): Observable<IBooks> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    book.id = 0;
    return this.http.post<IBooks>(this.booksUrl, book, { headers }).pipe(
      tap((data) => console.log('createBook: ' + JSON.stringify(data))),
      catchError(this.handleError),
    );
  }

  deleteBook(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<IBooks>(url, { headers }).pipe(
      tap((data) => console.log('deleteBook: ' + id)),
      catchError(this.handleError),
    );
  }

  updateBook(book: IBooks): Observable<IBooks> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put<IBooks>(url, book, { headers }).pipe(
      tap(() => console.log('updateProduct: ' + book.id)),
      // Return the book on an update
      map(() => book),
      catchError(this.handleError),
    );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  private initializeBook(): IBooks {
    // Return an initialized object
    return {
      id: 0,
      title: '',
      author: '',
      publication_year: 0,
      genre: [''],
      description: '',
    };
  }
}
