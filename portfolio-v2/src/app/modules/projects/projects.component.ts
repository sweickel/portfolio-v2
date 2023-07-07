import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      imgSrc: '../../assets/Calculator.png',
      url: 'https://sweickel.github.io/calculator/',
      title: 'Calculator',
      body: 'Simple Calculator built with Javascript.',
    },
    {},
    {},
    {},
  ]
}
