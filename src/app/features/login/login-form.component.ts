import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';
import { PortalCopy } from '../../i18n/portal-copy';
import { HoneycombDecoComponent } from '../../shared/components/honeycomb-deco/honeycomb-deco.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, HoneycombDecoComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private readonly auth = inject(AuthService);

  copy = input.required<PortalCopy>();
  dir = input.required<'rtl' | 'ltr'>();
  year = input.required<number>();

  showPwd = signal(false);
  email = signal('');
  password = signal('');
  remember = signal(false);
  error = signal(false);
  loading = signal(false);

  togglePwd(): void {
    this.showPwd.update((v) => !v);
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    this.error.set(false);
    this.loading.set(true);

    this.auth
      .login({
        email: this.email(),
        password: this.password(),
        remember: this.remember(),
      })
      .subscribe({
        next: () => this.loading.set(false),
        error: () => {
          this.loading.set(false);
          this.error.set(true);
        },
      });
  }
}
