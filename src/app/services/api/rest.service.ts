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
    // ! eliminar
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

    let URL_GET = this._URL + 'getListaDetalle/';

    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');

    // return this._http.get(URL_GET, {headers: headers})
    //     .map(response => response.json());      

    return this.http.get<Cronograma[]>(URL_GET); 
    // return this.http.get<Cronograma[]>(URL_GET, {headers: headers});  // **
    // return this.http.get<Activity[]>(this.URL_GET, requestOptions);

    
  }

  PostActivity(newCronograma: Cronograma) {
    let URL_POST = this._URL + 'postCronograma/';
    
    let packgeIdStr: string = JSON.stringify(newCronograma);
    // console.log("packgeIdStr");
    // console.log(packgeIdStr);
    // const data = { stringArrDo: packgeIdStr, date: date };
    // const url = this.serviceAPI + '/...../retrieve';

    // console.log("rest.servive");
    // console.log(newCronograma);

    return this.http.post(URL_POST, packgeIdStr);
    // return this.http.post(this.URL_POST, newCronograma);
    // return this.http.post<Cronograma>(this.URL_POST, newCronograma);
  }
}
