import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TaskHttpService {
  constructor(private http: HttpClient) { }

  create(task) {
    return this.http.post(`${environment.apiUrl}/tasks`, task);
  }

  select(project) {
    return this.http.get(`${environment.apiUrl}/tasks?project=${project}`);
  }

  update(task, values) {
    return this.http.put(`${environment.apiUrl}/tasks/${task}`, values);
  }

  delete(task) {
    return this.http.delete(`${environment.apiUrl}/tasks/${task}`);
  }

  close(task) {
    return this.http.put(`${environment.apiUrl}/tasks/${task}`, { status: 'closed' });
  }
}
