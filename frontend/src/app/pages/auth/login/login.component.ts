import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthStateService } from 'src/app/shared/services/auth-state.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit() { }

  onSubmit() {
      this.authService.signin(this.loginForm.value).subscribe(
        result => {
          this.responseHandler(result);
        },
        error => {
          this.errors = error.error;
        },() => {
          this.authState.setAuthState(true);
          this.loginForm.reset()
          this.router.navigate(['profile']);
        }
      );
  }

  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }

}