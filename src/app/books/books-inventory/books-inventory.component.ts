import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';
import { Book, bookGenreTypes } from '../books.model';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'books-inventory',
  templateUrl: './books-inventory.component.html',
  styleUrls: ['./books-inventory.component.css'],
})
export class BooksInventoryComponent implements OnInit {
  bookGenreTypes;
  book = {
    name: '',
    id: 0,
  };
  constructor(
    private booksService: BooksService,
    private route: Router,
  ) {
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
    console.log(typeof this.addbooksForm.value);
    const data = {
      title: this.addbooksForm.value.bookTitle,
      id: Math.random(),
      author: this.addbooksForm.value.bookAuthor,
      yop: this.addbooksForm.value.bookYoP,
      genre: this.addbooksForm.value.bookGenre,
      description: this.addbooksForm.value.bookDescription,
      cover_image: 'https://fakeimg.pl/667x600/cc6600',
    };
    this.booksService.createBook(data).subscribe((response) => {
      console.log(response);
      this.route.navigate(['/books-list']);
      this.booksService.getBooks();
    });
  }

  removeBook(book: Book) {
    const id = book.id;
    this.booksService
      .deleteBook(id)
      .subscribe((product) => console.log(product));
    this.booksService.getBooks();
  }
}
