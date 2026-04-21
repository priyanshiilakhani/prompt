import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FeaturesData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'landing-mobile-app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Features {
  FeaturesData = FeaturesData;
}
