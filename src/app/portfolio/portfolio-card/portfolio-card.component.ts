import { Component, OnInit, Input } from '@angular/core';
import {PortfolioCard} from './PortFolioCard.model';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {


	portfolio : any;
	@Input('portfolio') itemObj : PortfolioCard;
  public hovered: boolean = false;

  ngOnInit() {

  	this.portfolio = {
    id : this.itemObj.ID,
  	title : this.itemObj.name,
  	folder : this.itemObj.folder,
  	subtitle : this.itemObj.subtitle,
    tagline : this.itemObj.tagline,
  	BgVid : this.itemObj.vid,
  	blurb : this.itemObj.blurb
  	}
  }

  enter(event){
  this.hovered = true;
  }
  exit(event){
  this.hovered = false;
  }
  reload(){
  window.scrollTo(0,0);
  }

 

}
