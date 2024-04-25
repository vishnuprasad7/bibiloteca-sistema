import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBooks } from '../books.model';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books: IBooks[];
  constructor(private booksService: BooksService) {
    this.books = [];
  }
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.booksService.getBooks().subscribe((books) => (this.books = books));
  }
}
