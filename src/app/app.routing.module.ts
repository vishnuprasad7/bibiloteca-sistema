import {
  PreloadAllModules,
  PreloadingStrategy,
  RouterModule,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_helpers/auth.guard';

const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);
const usersModule = () =>
  import('./users/users.module').then((x) => x.UsersModule);

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'welcome',
          component: WelcomeComponent,
          canActivate: [AuthGuard],
        },
        { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
        { path: 'account', loadChildren: accountModule },
        {
          path: 'books',
          canActivate: [AuthGuard],
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
