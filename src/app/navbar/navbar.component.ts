import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() news = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  link(tipo:number){
   this.news.emit(tipo);
  }

}
