import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Clients } from "./components/clients/clients";
import { Testimonial } from "./components/testimonial/testimonial";
import { Pricing } from "./components/pricing/pricing";
import { Faq } from "./components/faq/faq";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-saas-classic',
  imports: [Hero, Feature, Clients, Testimonial, Pricing, Faq, Header],
  templateUrl: './saas-classic.html',
  styles: ``,
})
export class SaasClassic {}
