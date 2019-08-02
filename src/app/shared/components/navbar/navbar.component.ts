import { Component, OnInit } from '@angular/core';
import { AuthHttpService } from '../../../services/http/auth.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private authHttpService: AuthHttpService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authHttpService.logout()
      .subscribe(() => this.router.navigate(['/login']))
  }
}
