import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserHttpService } from '../../services/http/user.http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(
    private userHttpService: UserHttpService,
    private router: Router
  ) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userHttpService
        .create(form.value)
        .subscribe(() => {
          this.router.navigate(['/login']);
        }, message => alert(message))
    }
  }

}
