import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  githubBaseUrl = 'https://sweickel.github.io'
  projects = [
    {
      imgSrc: '../../assets/Calculator.png',
      url: `${this.githubBaseUrl}/calculator/`,
      title: 'Calculator',
      body: 'Simple Calculator built with Javascript.',
    },
    {
      imgSrc: '../../assets/scissors.png',
      url: `${this.githubBaseUrl}/rock-paper-scissors/`,
      title: 'Rock, Paper, Scissors',
      body: 'This is a fun Rock, Paper, Scissors browser console game.'
    },
    {
      imgSrc: '../../assets/etch-a-sketch.png',
      url: `${this.githubBaseUrl}/etch-a-sketch`,
      title: 'Make-a-Sketch',
      body: 'HTML/CSS/Javascript implementation of the kids\' toy Etch-a-Sketch.'
    },
    {
      imgSrc: '../../assets/tic-tac-toe.png',
      url: `${this.githubBaseUrl}/tic-tac-toe`,
      title: 'Tic-Tac-Toe',
      body: 'HTML/CSS/Javascript implementation of Tic-Tac-Toe.'
    },
    {
      imgSrc: '../../assets/restaurant.png',
      url: `${this.githubBaseUrl}/restaurant`,
      title: 'Restaurant website satire',
      body: 'Goofy restaurant website satire.'
    },
  ]



}
