import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        {
          path: 'books',
          data: { preload: false },
          loadChildren: () =>
            import('./books/books.module').then((m) => m.BooksModule),
        },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent },
      ],
      { enableTracing: true }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
