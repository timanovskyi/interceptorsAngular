import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptors1';

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
    this._http.get('http://jsonplaceholder.typicode.com/userss')
      .subscribe(data => {

      })
    this._http.get('http://jsonplaceholder.typicode.com/posts/2')
      .subscribe(data => {

      })
    this._http.get('http://jsonplaceholder.typicode.com/posts/2/comments')
      .subscribe(data => {

      })
  }
}
