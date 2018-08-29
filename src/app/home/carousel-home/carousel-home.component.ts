import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import {transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss'],
  
})
export class CarouselHomeComponent implements OnInit {

  
	Items = [ 'assets/images/carouselhome/1.png' , 'assets/images/carouselhome/2.png','assets/images/carouselhome/3.png'];
	Index = 0;

 constructor() { }

  changeIndex(){
  	if(this.Index == (this.Items.length -1)){
  		this.Index = 0;
  	}else{
  	this.Index += 1;
  	}	
  }

  ngOnInit() {

 
  }
   ngAfterContentInit(){

 	interval(4000).subscribe(x => this.changeIndex());
  }
 
}
