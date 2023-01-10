import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { LeftNavComponent } from "./modules/left-nav/left-nav.component";
import { ContactFormComponent } from './modules/contact-form/contact-form.component';
import { WelcomeHeaderComponent } from './modules/welcome-header/welcome-header.component';
import { AboutMeComponent } from './modules/about-me/about-me.component'; 

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        LeftNavComponent,
        ContactFormComponent,
        WelcomeHeaderComponent,
        AboutMeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
    ]
})
export class AppModule { }
