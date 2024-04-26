import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BooksInventoryComponent } from './books/books-inventory/books-inventory.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'books-inventory', component: BooksInventoryComponent },
      { path: '', redirectTo: 'books-inventory', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
