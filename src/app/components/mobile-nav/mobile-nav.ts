import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MENU_DATA } from './data';

declare var HSOverlay: any;
@Component({
  selector: 'app-mobile-nav',
  imports: [RouterLink],
  templateUrl: './mobile-nav.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MobileNav {
  MENU_DATA = MENU_DATA;
  closeMenu() {
    const overlay = document.getElementById('mobileMenu');

    if (overlay) {
      // close panel
      overlay.classList.add('hidden');
      overlay.classList.remove('hs-overlay-open');
      overlay.classList.remove('translate-x-0');
    }

    // remove body scroll lock
    document.body.classList.remove('hs-overlay-body-open');

    // 🔥 remove ALL backdrops (important)
    document.querySelectorAll('.hs-overlay-backdrop').forEach((el) => el.remove());
  }
}
