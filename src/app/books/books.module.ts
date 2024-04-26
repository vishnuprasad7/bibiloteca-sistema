import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksInventoryComponent } from './books-inventory/books-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksService } from './books.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryBooksApiService } from './in-memory-books.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BooksInventoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryBooksApiService),
  ],
  exports: [CommonModule, ReactiveFormsModule],
  providers: [BooksService, InMemoryBooksApiService],
})
export class BooksModule {}
