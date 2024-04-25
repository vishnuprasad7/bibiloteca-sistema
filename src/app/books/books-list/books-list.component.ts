import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  bookList;
  constructor(private booksService: BooksService) {
    // console.log(this.books);
    this.bookList = this.booksService.getBooksList();
  }
  ngOnInit() {}
}
