import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import AOS from 'aos';
import swal from 'sweetalert';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, NgIf, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] 
})
export class NavbarComponent {
  isLoggedIn: boolean = localStorage.getItem('loggedIn') === 'true';

  ngOnInit() {
    AOS.init();
  }

  constructor(private router: Router) { }

  logout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    swal('Logout successful!');
  }

  showLoginAlert() {
    swal('Please log in to access your profile.');
  }
}
