import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DemoService {

  constructor(private http: HttpClient) { }

  getData(){

    let API_URL = `http://localhost:3000/api/v1/users/`
    return this.http.get(API_URL) 
    
  }

}
