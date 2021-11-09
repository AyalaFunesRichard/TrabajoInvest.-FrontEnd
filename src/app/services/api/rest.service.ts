import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cronograma } from 'src/app/models/Cronograma';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  activity: Cronograma;
    _URL: string = 'https://api-restfull-munoz-ayala.herokuapp.com/';
    // _URL: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  URL_GET = this._URL + 'getListaDetalle/';
  GetActivities() {

    // const headerDict = {
    //   Key: 'Id_Cronograma',
    //   Value: '1',
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // };
    // const requestOptions = {
    //   headers: new HttpHeaders(headerDict),
    // };

    return this.http.get<Cronograma[]>(this.URL_GET);
    // return this.http.get<Activity[]>(this.URL_GET, requestOptions);
  }

  URL_POST = this._URL + 'postCronograma/';
  PostActivity(newCronograma: Cronograma) {
    
    
    let packgeIdStr: string = JSON.stringify(newCronograma);
    console.log("packgeIdStr");
    console.log(packgeIdStr);
    // const data = { stringArrDo: packgeIdStr, date: date };
    // const url = this.serviceAPI + '/...../retrieve';

    console.log("rest.servive");
    console.log(newCronograma);

    return this.http.post(this.URL_POST, packgeIdStr);
    // return this.http.post(this.URL_POST, newCronograma);
    // return this.http.post<Cronograma>(this.URL_POST, newCronograma);
  }
}
