import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject , Observable} from 'rxjs';
import { environment } from './../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {EmailData} from './contactform/EmailData.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //URL
  private APIURL = environment.apiURL;


  //Passes portfolio data round rather than making multiple API Calls
  private portfolioItems = new BehaviorSubject<any>([]);
  Items = this.portfolioItems.asObservable();

  //http headers
  private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
  }


    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
 }


  constructor( private http: HttpClient) { }

  //Get Methods for TechStack and Portfolio
  getTechStack(){
  	return this.http.get(this.APIURL + '/tech')
  }

  getPortfolio(){
  	return this.http.get(this.APIURL + '/portfolio')
    }

  returnPortfolio(portfolio : any){
    this.portfolioItems.next(portfolio)
  }




  //Post method for form Data
  
  sendDetails( data : EmailData): Observable <EmailData>{
      return this.http.post<any>(this.APIURL + '/send', JSON.stringify({data}), this.httpOptions)
          
  }

 
}
