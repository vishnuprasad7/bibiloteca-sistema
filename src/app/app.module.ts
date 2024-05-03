import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { AppRoutingModule } from './app.routing.module';
import { UserModule } from './user/user.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryBooksApiService } from './books/in-memory-books.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    NgbModule,
    BooksModule,
    AppRoutingModule,
    BooksModule,
    UserModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryBooksApiService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
