import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';
import { bookGenreTypes } from '../books.model';

@Component({
  selector: 'books-inventory',
  templateUrl: './books-inventory.component.html',
  styleUrls: ['./books-inventory.component.css'],
})
export class BooksInventoryComponent implements OnInit {
  bookGenreTypes;
  constructor(private booksService: BooksService) {
    this.bookGenreTypes = bookGenreTypes;
  }
  addbooksForm = new FormGroup({
    bookTitle: new FormControl(),
    bookAuthor: new FormControl(),
    bookYoP: new FormControl(),
    bookGenre: new FormControl([]),
    bookDescription: new FormControl(),
  });

  ngOnInit() {}

  saveBooks() {
    console.log(this.addbooksForm.value);
    this.booksService.addBooksToInventory(this.addbooksForm.value);
  }
}
