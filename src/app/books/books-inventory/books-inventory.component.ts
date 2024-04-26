import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';
import { Book, IBooks, bookGenreTypes } from '../books.model';
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
  books: IBooks[];
  constructor(private booksService: BooksService, private route: Router) {
    this.books = [];
    this.bookGenreTypes = bookGenreTypes;
  }
  addbooksForm = new FormGroup({
    bookTitle: new FormControl(),
    bookAuthor: new FormControl(),
    bookYoP: new FormControl(),
    bookGenre: new FormControl([]),
    bookDescription: new FormControl(),
  });

  private getProducts() {
    this.booksService.getBooks().subscribe((books) => (this.books = books));
  }
  /*
getting ID of the last element in the books array object
 */
  ngOnInit() {
    this.getProducts();
    this.booksService.getBooks().subscribe((book) => {
      this.book.id = book[book.length - 1].id;
    });
  }
  addBook() {
    console.log(typeof this.addbooksForm.value);
    const data = {
      title: this.addbooksForm.value.bookTitle,
      id: ++this.book.id,
      author: this.addbooksForm.value.bookAuthor,
      publication_year: this.addbooksForm.value.bookYoP,
      genre: this.addbooksForm.value.bookGenre,
      description: this.addbooksForm.value.bookDescription,
      // cover_image: 'https://fakeimg.pl/667x600/cc6600',
    };
    this.booksService.createBook(data).subscribe((response) => {
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
