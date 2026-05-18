import { Component, computed, effect, signal } from '@angular/core';

import { BrandPanelComponent } from './features/brand-panel/brand-panel.component';
import { LoginFormComponent } from './features/login/login-form.component';
import { Lang, PORTAL_COPY } from './i18n/portal-copy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginFormComponent, BrandPanelComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly year = new Date().getFullYear();

  readonly lang = signal<Lang>('ar');

  readonly copy = computed(() => PORTAL_COPY[this.lang()]);
  readonly dir = computed(() => (this.lang() === 'ar' ? 'rtl' : 'ltr') as 'rtl' | 'ltr');
  readonly isAr = computed(() => this.lang() === 'ar');

  constructor() {
    effect(() => {
      const l = this.lang();
      document.documentElement.lang = l;
      document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    });
  }

  setLang(next: Lang): void {
    this.lang.set(next);
  }
}
