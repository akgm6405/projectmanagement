import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    
  url = 'http://192.168.0.45:8081/TeamManagementAPI/login' //live url
    
  
  constructor(private http: HttpClient, private router: Router) { }
 

  // CommonApiCall(param :any, apiName :any) {
  //    let headerkey :any  = sessionStorage.getItem('hk');
  //   const myObjStr = JSON.stringify(param);
  //   const myUrlStr = this.url + apiName;
  //   var httpOptions = {
  //     headers: new HttpHeaders({
  //       'headerkey': headerkey,
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://localhost:4201/',
  //       // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //       // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  //     })
  //   };
  //   return this.http.post<any>(myUrlStr, myObjStr, httpOptions)
  // }

  // LoginApiCall(param :any, apiName :any) {
  //   const myObjStr = JSON.stringify(param);
  //   const myUrlStr = this.url + apiName;

  //   var httpOptions = {
  //     headers: new HttpHeaders({
  //       //'headerkey': "",
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://localhost:4201/',
  //       // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //       // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  //     })
  //   };
  //   return this.http.post<any>(myUrlStr, myObjStr, httpOptions)
  // }

  LoginApiCallAuthorization(param :any,authrozationKey :any) {
    //const myObjStr = JSON.stringify(param);
    const myUrlStr = this.url;

    var httpOptions = {
      headers: new HttpHeaders({
        'authorization': authrozationKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      })
    };
    return this.http.post<any>(myUrlStr,param, httpOptions)
  }
}
