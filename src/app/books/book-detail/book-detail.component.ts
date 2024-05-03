import { Component } from '@angular/core';
import { BookResolved, IBooks } from '../books.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  pageTitle = 'Book Detail';
  book!: IBooks;
  errorMessage: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const resolvedData: BookResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onBookRetrieved(resolvedData.book);
  }

  onBookRetrieved(book: IBooks): void {
    this.book = book;

    if (this.book) {
      this.pageTitle = `Book Detail: ${this.book.title}`;
    } else {
      this.pageTitle = 'No Book found';
    }
  }
}
