import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'app';
  user = {};
  constructor( private http: HttpClient) {
  }

  ngOnInit(): void {
      this.http.get(`${environment.apiUrl}/user/5a6750d5bcf2a622c87c5eff`).subscribe(data => {
        this.user = data;
      });
  }
}

