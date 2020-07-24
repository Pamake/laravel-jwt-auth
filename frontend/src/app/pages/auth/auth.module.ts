import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { authRouting } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AuthNoticeComponent,
    UserProfileComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    authRouting,
  ],
  providers: [],
  exports: []
})
export class AuthModule { }