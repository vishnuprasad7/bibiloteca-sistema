import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooksList() {}
  addBooksToInventory(book: any) {
    // this.books.push(book);
  }
}
