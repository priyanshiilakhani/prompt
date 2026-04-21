import { Component } from '@angular/core';
import { Header } from "../components/header/header";
import { Demos } from "./components/demos/demos";
import { Feature } from "./components/feature/feature";
import { Hero } from "./components/hero/hero";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header,Demos, Feature, Hero, Footer],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
