import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Cronograma } from 'src/app/models/Cronograma';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  activity: Cronograma;
    _URL: string = 'https://api-restfull-munoz-ayala.herokuapp.com/';
    // _URL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  GetActivities() {
    let URL_GET = this._URL + 'getListaDetalle/';
  
    return this.http.get<Cronograma[]>(URL_GET);     
  }

  PostActivity(newCronograma: Cronograma) {
    let URL_POST = this._URL + 'postCronograma/';
    
    let packgeIdStr: string = JSON.stringify(newCronograma);

    return this.http.post(URL_POST, packgeIdStr);
  }
}
