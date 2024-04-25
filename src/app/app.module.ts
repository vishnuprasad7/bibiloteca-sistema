import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, BooksModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
