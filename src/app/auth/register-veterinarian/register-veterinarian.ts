import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VeterinarianService } from '../../services/veterinarian.service'; // ✅ NEW

@Component({
  selector: 'app-register-veterinarian',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-veterinarian.html',
  styleUrl: './register-veterinarian.scss',
})
export class RegisterVeterinarianComponent {
  registerForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private veterinarianService: VeterinarianService // ✅ inject the service
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone_number: ['', Validators.required],
      cabinet_address: ['', Validators.required],
    });

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const veterinarian = {
      user: {
        email: this.f['email'].value,
        username: this.f['username'].value,
        first_name: this.f['first_name'].value,
        last_name: this.f['last_name'].value,
        password: this.f['password'].value, // ✅ added
        role: 'veterinarian'
      },
      phone_number: this.f['phone_number'].value,
      cabinet_address: this.f['cabinet_address'].value
    } as const;

    //console.log(veterinarian);

    this.veterinarianService.registerVeterinarian(veterinarian).subscribe({
      next: () => {
        this.successMessage = 'Registration successful!';
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
