import { Component, OnInit, Directive, HostListener, Renderer } from '@angular/core';
import { fromEvent } from 'rxjs';
import {MatMenuModule} from '@angular/material/menu';
import {Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  menu = '/u2261';
 scrolled = false;
currentUrl: string;

 @HostListener('window:scroll', ['$event'])
  onWindowScroll($event){

    if(window.scrollY > 50){
    this.scrolled = true;
    }else if( window.scrollY < 150){
    this.scrolled = false;
    }
  }
  

  

  constructor(private route :Router) {
  route.events.subscribe((val) => {
    this.currentUrl = this.route.url
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    }

}
