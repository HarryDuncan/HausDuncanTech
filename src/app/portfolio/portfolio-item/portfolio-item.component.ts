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
   console.log(this.portfolio$);
    if(this.portfolio$.length === 0){
      this.data.getPortfolio().subscribe(
      data => this.portfolio$ = data
      )
      
    }
      this.item = this.portfolio$[this.id - 1]
      console.log(this.portfolio$);
    
   window.scroll({top: 0, behavior:  'smooth'});
  }
   reloadSection(newID) {
   this.item = this.portfolio$[newID - 1]
   window.scroll({top: 0, behavior:  'smooth'});
  }
    
  
  

}

