import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginSts: boolean = false
  onlogin() {
    return this.loginSts
  }
}
