import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from '../books.service';
import { IBooks, bookGenreTypes } from '../books.model';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { InMemoryBooksApiService } from '../in-memory-books.service';

@Component({
  selector: 'books-inventory',
  templateUrl: './books-inventory.component.html',
  styleUrls: ['./books-inventory.component.css'],
})
export class BooksInventoryComponent implements OnInit {
  bookGenreTypes;
  book = {
    title: '',
    id: 0,
  };
  books: IBooks[];
  constructor(
    private booksService: BooksService,
    private route: Router,
    private inMemoryBooksService: InMemoryBooksApiService
  ) {
    this.books = [];
    this.bookGenreTypes = bookGenreTypes;
  }
  showBookList: boolean = false;
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
    const data = {
      title: this.addbooksForm.value.bookTitle,
      id: ++this.book.id,
      author: this.addbooksForm.value.bookAuthor,
      publication_year: this.addbooksForm.value.bookYoP,
      genre: this.addbooksForm.value.bookGenre,
      description: this.addbooksForm.value.bookDescription,
      // cover_image: 'https://fakeimg.pl/667x600/cc6600',
    };
    // this.booksService.createBook(data).subscribe((response) => {
    //   this.getProducts();
    //   this.showAllBooks();
    //   this.resetValues();
    // });
  }
  resetValues() {
    this.addbooksForm.reset();
  }

  // removeBook(book: Book) {
  //   const id = book.id;
  //   this.booksService.deleteBook(id).subscribe((book) => {
  //     const index = this.books.findIndex((i: any) => i.id === id);
  //     if (index !== -1) {
  //       const deletedItem = this.books.splice(index, 1)[0];
  //       console.log(deletedItem);
  //     } else {
  //       console.log('Item Not found');
  //     }
  //     // this.showAllBooks();
  //   });
  // }
  // editBook(book: Book) {
  //   const id = book.id;
  //   const updatedItem = book;
  //   // this.booksService.editBook(this.book).subscribe((response) => {
  //   //   console.log(response);
  //   //   const index = this.books.findIndex((i: any) => i.id === id);
  //   //   if (index !== -1) {
  //   //     // this.addbooksForm.patchValue(updatedItem);
  //   //     // this.books[index] = { ...this.books[index], ...updatedItem };
  //   //     console.log('updated');
  //   //   } else {
  //   //     console.log('not updated');
  //   //   }
  //   // });
  //   // this.getProducts();
  //   // this.resetValues();
  // }
  showAllBooks() {
    this.showBookList = true;
    this.booksService.getBooks();
  }
}
