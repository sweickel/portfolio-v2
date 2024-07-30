import { Component, OnInit } from '@angular/core';
import { snippets } from '../../../articles';

export interface Article {
  title: string;
  description: string;
  imageLocation: string;
  button: {
    text: string;
    url: string;
  }
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: Article[] = [];
  
  ngOnInit(): void {
   this.articles = snippets;
  }

  // articles = [
    // {
    //   title: "Card Title",
    //   description: "Some quick example text to build on the card title and make up the bulk of this card's content.",
    //   imageLocation: "../../assets/gear.png",
    //   button: {
    //     text: "Go somewheres",
    //     url: "#",
    //   }
    // }
  // ];
}
