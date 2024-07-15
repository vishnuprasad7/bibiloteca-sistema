import { Component } from '@angular/core';
import { BookResolved, IBooks } from '../books.model';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css',
})
export class BookEditComponent {
  pageTitle = 'Book Edit';
  errorMessage!: string;

  private dataIsValid: { [key: string]: boolean } = {};

  get isDirty(): boolean {
    return (
      JSON.stringify(this.originalBook) !== JSON.stringify(this.currentBook)
    );
  }

  private currentBook!: IBooks;
  private originalBook!: IBooks;

  get book(): IBooks {
    return this.currentBook;
  }
  set book(value: IBooks) {
    this.currentBook = value;
    // this.originalBook = value ? { ...value } : [];
  }

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const resolvedData: BookResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onBookRetrieved(resolvedData.book);
    });
  }

  onBookRetrieved(book: IBooks): void {
    this.book = book;

    if (!this.book) {
      this.pageTitle = 'No book found';
    } else {
      if (this.book.id === 0) {
        this.pageTitle = 'Add Book';
      } else {
        this.pageTitle = `Edit Book: ${this.book.title}`;
      }
    }
  }

  deleteBook(): void {
    if (this.book.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.book.title} was deleted`);
    } else {
      if (confirm(`Really delete the book: ${this.book.title}?`)) {
        this.booksService.deleteBook(this.book.id).subscribe({
          next: () => this.onSaveComplete(`${this.book.title} was deleted`),
          error: (err) => (this.errorMessage = err),
        });
      }
    }
  }

  isValid(path?: string): boolean {
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (
      this.dataIsValid &&
      Object.keys(this.dataIsValid).every((d) => this.dataIsValid[d] === true)
    );
  }

  reset(): void {
    // this.dataIsValid = null;
    // this.currentBook = null;
    // this.originalBook = null;
  }

  saveBook(): void {
    // if (this.isValid()) {
    if (this.book.id === 0) {
      this.booksService.createBook(this.book).subscribe({
        next: () => this.onSaveComplete(`The new ${this.book.title} was saved`),
        error: (err) => (this.errorMessage = err),
      });
    } else {
      this.booksService.updateBook(this.book).subscribe({
        next: () =>
          this.onSaveComplete(`The updated ${this.book.title} was saved`),
        error: (err) => (this.errorMessage = err),
      });
    }
    // } else {
    //   this.errorMessage = 'Please correct the validation errors.';
    // }
  }

  onSaveComplete(message?: string): void {
    this.reset();
    this.router.navigate(['/books']);
  }

  validate(): void {
    // Clear the validation object
    this.dataIsValid = {};

    // // 'info' tab
    // if (
    //   this.product.productName &&
    //   this.product.productName.length >= 3 &&
    //   this.product.productCode
    // ) {
    //   this.dataIsValid['info'] = true;
    // } else {
    //   this.dataIsValid['info'] = false;
    // }

    // // 'tags' tab
    // if (this.product.category && this.product.category.length >= 3) {
    //   this.dataIsValid['tags'] = true;
    // } else {
    //   this.dataIsValid['tags'] = false;
    // }
  }
}
