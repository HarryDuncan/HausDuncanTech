import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject , Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private APIURL = environment.apiURL;

  private portfolioItems = new BehaviorSubject<any>([]);
  Items = this.portfolioItems.asObservable();

  constructor( private http: HttpClient) { }

  getTechStack(){
  	return this.http.get(this.APIURL + '/tech')
  }

  getPortfolio(){
  	return this.http.get(this.APIURL + '/portfolio')
    }
  

  returnPortfolio(portfolio : any){
    this.portfolioItems.next(portfolio)
  }
}
