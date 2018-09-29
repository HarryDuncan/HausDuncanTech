import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit , OnDestroy{

	portfolio$ : Object;



  constructor(private data : DataService) {}

  ngOnInit() {

  	this.data.getPortfolio().subscribe(
  	data => this.portfolio$ = data
  	)
    this.data.Items.subscribe(portfolio => this.portfolio$ = portfolio);
    window.scrollTo(0, 0);
    
  }

  ngOnDestroy(){
  this.data.returnPortfolio(this.portfolio$);
  }

    scrollDown($element) : void {
    
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
