import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, EventEmitter, HostListener, Component, Directive, Output } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon"; 
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms' ;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TechstackComponent } from './techstack/techstack.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



import {HttpClientModule} from '@angular/common/http';
import { InfoCardComponentComponent } from './info-card-component/info-card-component.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { PortfolioCardComponent } from './portfolio/portfolio-card/portfolio-card.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselgalleryComponent } from './portfolio/carouselgallery/carouselgallery.component';
import { CarouselHomeComponent } from './home/carousel-home/carousel-home.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { ContactformComponent } from './contactform/contactform.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TechstackComponent,
    PortfolioComponent,
    HomeComponent,
    FooterComponent,
    InfoCardComponentComponent,
    PortfolioItemComponent,
    PortfolioCardComponent,
    AboutComponent,
    ContactComponent,
    CarouselgalleryComponent,
    CarouselHomeComponent,
    MobileNavComponent,
    ContactformComponent,

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})


export class AppModule { }
