import { Component } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getUser() {
    return this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
