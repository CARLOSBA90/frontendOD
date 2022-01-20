import { Component, ViewChild } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  carousel = false;

  showNews(tipo:number){
      alert(tipo);
  }



}
