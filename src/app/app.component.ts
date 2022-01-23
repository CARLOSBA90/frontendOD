import { Component, OnInit, ViewChild } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  constructor(private router: Router ) {}
  carousel = true;
  rout     = this.router;

  showNews(tipo:number){
      if(tipo==0) {
        this.main();
        return;
      }
      alert("no retorna x main");
      if(this.carousel) this.carousel = false;
  }

  main(){
    if(!this.carousel) this.carousel = true; ///T0D0 MAIN
  }



}
