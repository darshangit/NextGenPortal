import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  url = 'http://localhost:3000/author';

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {

    return this.http.get(this.url);
  }
}
