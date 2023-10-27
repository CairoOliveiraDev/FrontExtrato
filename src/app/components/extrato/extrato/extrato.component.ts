import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  lancamentos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLançamentos();
  }

  getLançamentos() {
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
