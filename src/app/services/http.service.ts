import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/planer_db/collections/task';
  readonly param = new HttpParams().set('apiKey', 'NHyUzFcOXwRvfYERju8Ei22RIewEAuW6');
  paramId = new HttpParams().set('apiKey', 'NHyUzFcOXwRvfYERju8Ei22RIewEAuW6');

  constructor(private http: HttpClient) {
    this.getTasks();
    // this.getTasks();

  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, { params: this.param });//.subscribe( t => {
    //  console.log(t);
    //});
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, { params: this.param }).subscribe(t => {
      console.log(t);
    });
  }


}
