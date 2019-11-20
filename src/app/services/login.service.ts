import {Injectable} from '@angular/core';

import {  HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params} from '@angular/router';



@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post('http://localhost:5000/api/getall', {
      username: username,
      password: password,     
    });     
  }
}




















