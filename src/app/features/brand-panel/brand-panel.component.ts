import { Component, input, output } from '@angular/core';

import { PORTAL_ASSETS } from '../../core/constants/portal.assets';
import { Lang, PortalCopy } from '../../i18n/portal-copy';
import { BrandLogoComponent } from '../../shared/components/brand-logo/brand-logo.component';
import { LangSwitchComponent } from '../../shared/components/lang-switch/lang-switch.component';

@Component({
  selector: 'app-brand-panel',
  standalone: true,
  imports: [BrandLogoComponent, LangSwitchComponent],
  templateUrl: './brand-panel.component.html',
})
export class BrandPanelComponent {
  readonly brandBackground = PORTAL_ASSETS.background;

  copy = input.required<PortalCopy>();
  dir = input.required<'rtl' | 'ltr'>();
  lang = input.required<Lang>();
  isAr = input.required<boolean>();

  langChange = output<Lang>();

  onLangChange(next: Lang): void {
    this.langChange.emit(next);
  }
}
