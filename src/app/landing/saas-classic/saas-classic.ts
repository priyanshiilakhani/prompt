import { Component, Renderer2 } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Feature } from './components/feature/feature';
import { Clients } from './components/clients/clients';
import { Testimonial } from './components/testimonial/testimonial';
import { Pricing } from './components/pricing/pricing';
import { Faq } from './components/faq/faq';
import { Header } from '../../components/header/header';
import { Footer } from '@app/components/footer/footer';
import { App } from "@/app/app";
import { BackToTop } from "@app/components/back-to-top/back-to-top";

@Component({
  selector: 'app-saas-classic',
  imports: [Hero, Feature, Clients, Testimonial, Pricing, Faq, Header, Footer, App, BackToTop],
  templateUrl: './saas-classic.html',
  styles: ``,
})
export class SaasClassic {
  constructor(private rendered: Renderer2) {}
  ngOnInit(): void {
    this.rendered.addClass(document.body, 'text-default-800');
  }
  ngOnDestroy(): void {
    this.rendered.removeClass(document.body, 'text-default-800');
  }
}
