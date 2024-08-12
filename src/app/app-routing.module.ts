import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ContactFormComponent } from './modules/contact-form/contact-form.component';
import { ProjectsComponent } from './modules/projects/projects.component';

const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'projects', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
