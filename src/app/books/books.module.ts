import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksService } from './books.service';
import { InMemoryBooksApiService } from './in-memory-books.service';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookResolver } from './books.resolver.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookEditInfoComponent } from './book-edit/book-edit-info/book-edit-info.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookEditInfoComponent,
    BookEditComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: ':id',
        component: BookDetailComponent,
        resolve: { resolvedData: BookResolver },
      },
      {
        path: ':id/edit',
        component: BookEditComponent,
        resolve: { resolvedData: BookResolver },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: BookEditInfoComponent },
        ],
      },
    ]),
  ],
  providers: [BooksService, InMemoryBooksApiService],
})
export class BooksModule {}
