import { Injectable } from '@angular/core';
import { Observable, delay, of, switchMap, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LoginCredentials } from '../models/login-credentials.model';

/**
 * Authentication API integration point.
 * Replace `login` implementation when wiring the real broker auth backend.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  login(credentials: LoginCredentials): Observable<void> {
    const isValid = Boolean(credentials.email?.trim() && credentials.password?.trim());

    // TODO: replace with HttpClient POST to `${environment.apiUrl}/auth/login`
    return of(null).pipe(
      delay(environment.mockAuthDelayMs),
      switchMap(() =>
        isValid ? of(undefined) : throwError(() => new Error('INVALID_CREDENTIALS')),
      ),
    );
  }
}
