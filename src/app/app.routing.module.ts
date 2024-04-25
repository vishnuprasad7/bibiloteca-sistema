import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksInventoryComponent } from './books/books-inventory/books-inventory.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'books-list', component: BooksListComponent },
      { path: 'books-inventory', component: BooksInventoryComponent },
      { path: '', redirectTo: 'books-list', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
