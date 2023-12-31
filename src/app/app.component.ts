//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lancamentos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLancamentos();
  }

  getLancamentos() {
    this.http.get('/api/lancamentos').subscribe(
      (data: any) => {
        this.lancamentos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
