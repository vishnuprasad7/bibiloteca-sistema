import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksInventoryComponent } from './books-inventory/books-inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksService } from './books.service';
import { InMemoryBooksApiService } from './in-memory-books.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookResolver } from './books.resolver.service';

@NgModule({
  declarations: [
    BooksInventoryComponent,
    BookListComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'books',
        component: BookListComponent,
      },
      {
        path: 'books/:id',
        component: BookDetailComponent,
        resolve: { resolvedData: BookResolver },
      },
    ]),
  ],
  exports: [CommonModule, ReactiveFormsModule, RouterModule],
  providers: [BooksService, InMemoryBooksApiService],
})
export class BooksModule {}
