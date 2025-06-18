import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginRequest, LoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = `${environment.apiBaseUrl}/auth/login/`;
  private googleLoginUrl = `${environment.apiBaseUrl}/auth/login/google/`;

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, data);
  }

  loginWithGoogle(token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.googleLoginUrl, { "google_token" : token });
  }
}
