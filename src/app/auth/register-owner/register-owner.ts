import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OwnerService } from '../../services/owner.service';

@Component({
  selector: 'app-register-owner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-owner.html',
  styleUrl: './register-owner.scss',
})
export class RegisterOwnerComponent {
  registerForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private ownerService: OwnerService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      county: ['', Validators.required],
      CNP: ['', Validators.required],
      phone_number: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) return;

    const owner = {
      user: {
        email: this.f['email'].value,
        username: this.f['username'].value,
        first_name: this.f['first_name'].value,
        last_name: this.f['last_name'].value,
        password: this.f['password'].value,
        role: 'owner'
      },
      city: this.f['city'].value,
      street: this.f['street'].value,
      number: this.f['number'].value,
      county: this.f['county'].value,
      CNP: this.f['CNP'].value,
      phone_number: this.f['phone_number'].value
    } as const;

    console.log(owner);

    this.ownerService.registerOwner(owner).subscribe({
      next: () => {
        this.successMessage = 'Owner registered successfully!';
        this.errorMessage = '';
        this.registerForm.reset();
        this.submitted = false;
      },
      error: () => {
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
      }
    });
  }
}
