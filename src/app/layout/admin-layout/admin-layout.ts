import { Component } from '@angular/core';
import { AdminHeader } from "@app/components/admin-header/admin-header";
import { RouterOutlet } from '@angular/router';
import { AdminFooter } from '@app/components/admin-footer/admin-footer';

@Component({
  selector: 'app-admin-layout',
  imports: [AdminHeader, RouterOutlet, AdminFooter],
  templateUrl: './admin-layout.html',
  styles: ``,
})
  
export class AdminLayout {}
