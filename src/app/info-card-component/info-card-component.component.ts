import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { TechStack } from './techstack.model'

@Component({
  selector: 'app-info-card-component',
  templateUrl: './info-card-component.component.html',
  styleUrls: ['./info-card-component.component.scss']

 })


export class InfoCardComponentComponent implements OnInit {
	
	tech : any;
	@Input('tech') techObj : TechStack;
	@Input() currentState;
	public hovered : boolean = false;

  constructor() { }

  ngOnInit() {


	  this.tech = {
	  	title : this.techObj.name,
	  	subtitle : this.techObj.subtitle,
	  	blurb : this.techObj.blurb,
	  	imageURL : this.techObj.imageURL,
	  }
  }


  turn(){
    this.hovered = !this.hovered;
  }
  
}
