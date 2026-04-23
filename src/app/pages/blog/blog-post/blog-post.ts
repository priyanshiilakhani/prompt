import { Component } from '@angular/core';
import { Header } from "@app/components/header/header";
import { BackToTop } from "@app/components/back-to-top/back-to-top";
import { Footer } from "../blog/components/footer/footer";
import { Home } from "./components/home/home";
import { Navigation } from "./components/navigation/navigation";
import { Comments } from "./components/comments/comments";

@Component({
  selector: 'app-blog-post',
  imports: [Header, BackToTop, Footer, Home, Navigation, Comments],
  templateUrl: './blog-post.html',
  styles: ``,
})
  
export class BlogPost {}
