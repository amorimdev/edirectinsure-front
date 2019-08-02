import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthHttpService {
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(`${environment.apiUrl}/auth/login`, user);
  }

  logout() {
    return this.http.post(`${environment.apiUrl}/auth/logout`, {});
  }
}
