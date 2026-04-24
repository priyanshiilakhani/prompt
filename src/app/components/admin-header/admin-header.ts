import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { adminNavData, notificationData, profileData } from './data';

@Component({
  selector: 'app-admin-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-header.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AdminHeader {
  adminNavData = adminNavData;
  notificationData = notificationData;
  profileData = profileData;
  closeMenu() {
    const overlay = document.getElementById('adminMobileMenu');

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
