import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner.model';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl = `${environment.apiBaseUrl}/auth/register/owner/`;

  constructor(private http: HttpClient) {}

  registerOwner(owner: Owner): Observable<any> {
    return this.http.post(this.apiUrl, owner).pipe(
      tap(response => console.log('API response:', response))
    );
  }
}
