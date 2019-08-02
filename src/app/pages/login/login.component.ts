import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthHttpService } from '../../services/http/auth.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authHttpService: AuthHttpService,
    private router: Router
  ) { }

  private static setToken(token) {
    return localStorage.setItem('_auth_token', token) ;
  }

  private static delToken() {
    return localStorage.removeItem('_auth_token');
  }

  ngOnInit() {
    LoginComponent.delToken();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authHttpService
        .login(form.value)
        .subscribe(({ result }: any) => {
          LoginComponent.setToken(result.token);
          this.router.navigate(['/']);
        }, message => alert(message))
    }
  }
}
