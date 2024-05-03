import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBooks } from '../books.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  books: IBooks[];
  filteredBooks: IBooks[] = [];
  pageTitle = 'Book List';
  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {
    this.books = [];
  }
  ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    this.getProducts();
  }
  private getProducts() {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
      this.filteredBooks = this.performFilter(this.listFilter);
    });
  }
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.books;
  }

  performFilter(filterBy: string): IBooks[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter(
      (book: IBooks) => book.title.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
