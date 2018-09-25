import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';



@Component({
  selector: 'app-carouselgallery',
  templateUrl: './carouselgallery.component.html',
  styleUrls: ['./carouselgallery.component.scss']
})
export class CarouselgalleryComponent implements OnInit {

	Items = [ 'assets/images/carousel/1.png' , 'assets/images/carousel/2.png','assets/images/carousel/3.png'];
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
