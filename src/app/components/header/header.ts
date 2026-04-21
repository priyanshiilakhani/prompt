import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";
import { MobileNav } from "../mobile-nav/mobile-nav";


@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, Navbar, MobileNav],
  templateUrl: './header.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Header {
 
}
