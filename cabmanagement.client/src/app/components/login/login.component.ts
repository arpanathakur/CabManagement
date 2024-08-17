import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) { }
  hide = true;
  onLoginSuccess() {
    debugger;
    this.router.navigate(['/dashboard']);
  }
}
