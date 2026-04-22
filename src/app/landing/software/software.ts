import { Component, Renderer2 } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Review } from './components/review/review';
import { Feature } from './components/feature/feature';
import { Pricing } from './components/pricing/pricing';
import { Testimonial } from './components/testimonial/testimonial';
import { Footer } from "./components/footer/footer";


@Component({
  selector: 'app-software',
  imports: [Hero, Review, Feature, Pricing, Testimonial, Footer],
  templateUrl: './software.html',
  styles: ``,
})
export class Software {
  constructor(private rendered: Renderer2) {}
  ngOnInit(): void {
    this.rendered.addClass(document.body, 'text-default-700');
  }
  ngOnDestroy(): void {
    this.rendered.removeClass(document.body, 'text-default-700');
  }
}
