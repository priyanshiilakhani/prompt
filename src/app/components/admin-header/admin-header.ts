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
}
