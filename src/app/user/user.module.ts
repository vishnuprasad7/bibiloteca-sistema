import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
    ]),
  ],
  providers: [],
})
export class UserModule {}
