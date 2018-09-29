import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss']
})


export class TechstackComponent implements OnInit {

	tech$: Object;

  
  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getTechStack().subscribe(
  	data => this.tech$ = data
  	)
  window.scrollTo(0, 0);
  }

    scrollDown($element) : void {
    
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


}
