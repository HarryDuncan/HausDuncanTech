import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-down-arrow',
  templateUrl: './down-arrow.component.html',
  styleUrls: ['./down-arrow.component.scss']
})
export class DownArrowComponent implements OnInit {

screenHeight = window.innerHeight;
pageYOffset  = window.pageYOffset;
  constructor() { }

  ngOnInit() {
  }
  scrollDown(){
  console.log('hi')
   window.scrollBy({ top: this.screenHeight, behavior: 'smooth' });
  }
}
