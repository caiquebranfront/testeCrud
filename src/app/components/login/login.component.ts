import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export  class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(() => {
        console.log('Logged in successfully!');
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
