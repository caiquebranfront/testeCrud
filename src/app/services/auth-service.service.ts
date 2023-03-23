import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.auth.auth.signInWithPopup(email, password);
  }

  logout() {
    return this.auth.auth.signOut();
  }
}
