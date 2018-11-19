import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  users: any = []
  
  constructor(public http: HttpClient,
    public _demoService: DemoService) { }  

  ngOnInit() {
    this.showUs()
  }

  showUs(){
    this._demoService.apiData()
          .subscribe(users => this.users = users ) 
  }

}