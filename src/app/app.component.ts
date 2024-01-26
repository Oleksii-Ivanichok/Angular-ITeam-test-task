import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./_services/auth.service";
import {UserInfo} from "./_models/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userInfo = localStorage.getItem('user');
    if (!userInfo) return;
    const user: UserInfo = JSON.parse(userInfo);
    this.authService.setCurrentUser(user);
  }
}
