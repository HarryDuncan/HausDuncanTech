import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import {EmailData} from './EmailData.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  formData : EmailData = {name : '', phone:'', email:'', message:''};
	public submitted : boolean = false;
  constructor(private data : DataService) { }


  ngOnInit() {
    
  }

  //name phone email message
  submit(n, p, e ,m){
    if(n == '' || e == '' || m == ''){
    console.log('invalid');
    }else{
    this.formData.name = n;
    this.formData.phone = p;
    this.formData.email = e;
    this.formData.message = m;

    this.data.sendDetails(this.formData)
    .subscribe(data => this.formData,
    ()=>{},
    () => this.submitted = true );
    }
    
  }

  send(){

  }

}
  