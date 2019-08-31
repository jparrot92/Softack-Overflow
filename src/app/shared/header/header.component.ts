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

  fullName() {
    return this.authService.currentUser.fullName();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
