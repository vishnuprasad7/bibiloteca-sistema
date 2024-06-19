import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './user/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        {
          path: 'books',
          canLoad: [AuthGuard],
          data: { preload: false },
          loadChildren: () =>
            import('./books/books.module').then((m) => m.BooksModule),
        },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent },
      ],
      { enableTracing: true, preloadingStrategy: PreloadAllModules },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
