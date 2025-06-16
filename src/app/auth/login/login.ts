import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginRequest } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email_or_username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const loginData: LoginRequest = {
      email_or_username: this.f['email_or_username'].value,
      password: this.f['password'].value,
    };

    this.loginService.login(loginData).subscribe({
      next: (res) => {
        const role = res.user?.role;

        // localStorage.setItem('access', res.access);
        // localStorage.setItem('refresh', res.refresh);
        // localStorage.setItem('user', JSON.stringify(res.user));

        if (role === 'owner') {
          this.router.navigate(['/owner/home']);
        } else if (role === 'veterinarian') {
          this.router.navigate(['/vet/home']);
        } else {
          this.errorMessage = 'Unknown user role.';
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
