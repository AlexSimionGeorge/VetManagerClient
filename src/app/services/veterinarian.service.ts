import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { environment } from '../../environments/environment';
import {Veterinarian} from "../models/register.model"; // ✅ import it

@Injectable({
  providedIn: 'root'
})
export class VeterinarianService {

  private apiUrl = `${environment.apiBaseUrl}/auth/register/veterinarian/`;

  constructor(private http: HttpClient) {}

  registerVeterinarian(vet: Veterinarian): Observable<any> {
    return this.http.post(this.apiUrl, vet).pipe(
      tap(response => console.log('API response:', response))
    );
  }
}
