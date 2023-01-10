import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { ContactFormComponent } from './modules/contact-form/contact-form.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: AboutMeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'projects', component: ContactFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
