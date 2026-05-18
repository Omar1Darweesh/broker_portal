import { Component, input, output } from '@angular/core';

import { Lang } from '../../../i18n/portal-copy';

@Component({
  selector: 'app-lang-switch',
  standalone: true,
  styles: [`:host { display: block; flex-shrink: 0; }`],
  template: `
    <div
      [class]="'lang-switch' + (extraClass() ? ' ' + extraClass() : '')"
      role="group"
      [attr.aria-label]="ariaLabel()"
    >
      <button
        type="button"
        class="lang-btn"
        [class.active]="lang() === 'en'"
        (click)="select('en')"
        [attr.aria-pressed]="lang() === 'en'"
      >
        EN
      </button>
      <button
        type="button"
        class="lang-btn"
        [class.active]="lang() === 'ar'"
        (click)="select('ar')"
        [attr.aria-pressed]="lang() === 'ar'"
      >
        ع
      </button>
    </div>
  `,
})
export class LangSwitchComponent {
  lang = input.required<Lang>();
  extraClass = input('');
  ariaLabel = input('Language selector');

  langChange = output<Lang>();

  select(next: Lang): void {
    this.langChange.emit(next);
  }
}
