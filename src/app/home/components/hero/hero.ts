import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { imageData } from '../../data';
register();

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero  implements OnInit, OnDestroy  {
  imageData = imageData;

  texts = [
    'saas',
    'mobile app',
    'software',
    'startup',
    'agency',
    'portfolio',
    'coworking',
    'crypto',
    'marketing',
  ];

  displayText = '';
  loopNum = 0;
  isDeleting = false;
  period = 2000;

  typingSpeed = 150;
  deletingSpeed = 75;
  timeout: any;

  ngOnInit() {
    this.typeEffect();
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  typeEffect() {
    const i = this.loopNum % this.texts.length;
    const fullText = this.texts[i];

    if (this.isDeleting) {
      this.displayText = fullText.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = fullText.substring(0, this.displayText.length + 1);
    }

    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.displayText === fullText) {
      delay = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.loopNum++;
      delay = 500;
    }

    this.timeout = setTimeout(() => this.typeEffect(), delay);
  }
}
