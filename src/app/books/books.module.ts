import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksInventoryComponent } from './books-inventory/books-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksService } from './books.service';

@NgModule({
  declarations: [BooksListComponent, BooksInventoryComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule],
  providers: [BooksService],
})
export class BooksModule {}
