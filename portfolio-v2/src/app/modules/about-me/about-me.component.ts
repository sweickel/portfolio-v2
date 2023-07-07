import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  aboutMe = [
    `I'm a self-taught developer currently working in the finance industry as
    a Software Engineer. I'm an adaptive professional with great time
    management skills, and I love to learn new things!`,
    `I have a passion for all things related to front-end web development, but
    still spend a lot of time working with APIs in C# and Node, interacting with data
    in both SQL and NoSQL, and with CMS like Sitecore and Wordpress. Other
    than front end web development, I am interested in CI/CD and automation.`
  ]
}
