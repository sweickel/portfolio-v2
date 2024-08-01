import { Component, OnInit } from '@angular/core';
import { snippets } from '../../../assets/articles';

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
}
