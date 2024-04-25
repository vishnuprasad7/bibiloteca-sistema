import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'books-inventory',
  templateUrl: './books-inventory.component.html',
  styleUrls: ['./books-inventory.component.css'],
})
export class BooksInventoryComponent implements OnInit {
  constructor(private booksService: BooksService) {}
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
