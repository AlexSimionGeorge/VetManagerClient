import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Veterinarian } from '../models/veterinarian.model';
import {Observable, tap} from 'rxjs';
import { environment } from '../../environments/environment'; // ✅ import it

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
