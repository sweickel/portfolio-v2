import { Component, OnInit } from '@angular/core';
import { projects as _projects, IProject }  from 'src/assets/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:IProject[] = [];

  ngOnInit() {
    this.projects = _projects()
  };
}
