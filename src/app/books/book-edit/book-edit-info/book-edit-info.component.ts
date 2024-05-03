import { Component, ViewChild } from '@angular/core';
import { BookResolved, IBooks } from '../../books.model';
import { BooksService } from '../../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './book-edit-info.component.html',
  styleUrl: './book-edit-info.component.css',
})
export class BookEditInfoComponent {
  @ViewChild(NgForm) bookForm: NgForm | undefined;

  errorMessage: string | undefined;
  book: IBooks | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.data.subscribe((data) => {
      if (this.bookForm) {
        this.bookForm.reset();
      }
      this.book = data['resolvedData'].book;
    });
  }
}
