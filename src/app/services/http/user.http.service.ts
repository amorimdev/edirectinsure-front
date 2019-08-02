import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserHttpService {
  constructor(private http: HttpClient) { }

  create(user) {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }
}
