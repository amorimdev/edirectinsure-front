import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectHttpService {
  constructor(private http: HttpClient) { }

  create(project) {
    return this.http.post(`${environment.apiUrl}/projects`, project);
  }

  select() {
    return this.http.get(`${environment.apiUrl}/projects`);
  }

  update(project, values) {
    return this.http.put(`${environment.apiUrl}/projects/${project}`, values);
  }

  delete(project) {
    return this.http.delete(`${environment.apiUrl}/projects/${project}`);
  }
}
