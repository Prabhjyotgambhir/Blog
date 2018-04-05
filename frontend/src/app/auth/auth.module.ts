import { AuthRoutesModule } from './auth-routes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutesModule
  ],
  declarations: [SignupComponent, LoginComponent, AuthComponent]
})
export class AuthModule { }
