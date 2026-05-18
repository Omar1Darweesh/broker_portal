import { Component, input, signal } from '@angular/core';

import { PORTAL_ASSETS } from '../../../core/constants/portal.assets';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  styles: [`:host { display: block; flex-shrink: 0; }`],
  template: `
    <div [class]="'brand-logo-wrap' + (wrapClass() ? ' ' + wrapClass() : '')">
      @if (!hasError()) {
        <img
          [src]="logoSrc"
          [alt]="alt()"
          class="brand-logo-img"
          (error)="hasError.set(true)"
        />
      } @else {
        <span class="brand-logo-fallback" aria-hidden="true">W</span>
      }
    </div>
  `,
})
export class BrandLogoComponent {
  readonly logoSrc = PORTAL_ASSETS.logoApp;

  alt = input('Al Wataniya Insurance logo');
  wrapClass = input('');
  hasError = signal(false);
}
