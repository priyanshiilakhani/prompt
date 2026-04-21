import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Home } from "./components/home/home";
import { Features } from "./components/features/features";
import { Testimonials } from "./components/testimonials/testimonials";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-mobile-app',
  imports: [Header, Home, Features, Testimonials, Footer],
  templateUrl: './mobile-app.html',
  styles: ``,
})
export class MobileApp {}
