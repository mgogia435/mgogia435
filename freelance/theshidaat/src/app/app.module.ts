import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './body/about/about.component';
import { GigsComponent } from './body/gigs/gigs.component';
import { DiscographyComponent } from './body/discography/discography.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { ContactComponent } from './body/contact/contact.component';
import { EventsComponent } from './body/events/events.component';
import { ServicesComponent } from './body/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    GigsComponent,
    DiscographyComponent,
    GalleryComponent,
    ContactComponent,
    EventsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
