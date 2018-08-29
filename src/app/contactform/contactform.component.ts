import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

	notSubmit : boolean = true;
  constructor() { }


  //name phone email message
  submit(n, p, e ,m){
  	console.log(n, p, e, m);
  	this.notSubmit = false;
  }


  ngOnInit() {
  }

}
