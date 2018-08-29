import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit{

  @Input() name : string;

	id : any;
	item : any;
	portfolio$ : any;


  constructor(private data : DataService, private route : ActivatedRoute) {
  this.id = route.snapshot.params.id;
 
     
   

  }

  ngOnInit() {
   this.data.Items.subscribe(portfolio => this.portfolio$ = portfolio)
    if(this.portfolio$ == []){
      console.log('hi')
      this.data.getPortfolio().subscribe(
      data => this.portfolio$ = data
      )
    }
      this.item = this.portfolio$[this.id - 1]
    
   window.scroll(0,0);
  }

   reloadSection(newID) {
   this.item = this.portfolio$[newID - 1]
   window.scroll(0,0);
  }
    
  
  

}

