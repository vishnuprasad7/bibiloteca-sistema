import { Component, ViewChild } from '@angular/core';
import { IBooks, bookGenreTypes } from '../../books.model';
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
  bookGenreTypes;

  constructor(private route: ActivatedRoute) {
    this.bookGenreTypes = bookGenreTypes;
  }

  ngOnInit(): void {
    this.route.parent?.data.subscribe((data) => {
      if (this.bookForm) {
        this.bookForm.reset();
      }
      this.book = data['resolvedData'].book;
    });
  }
}
