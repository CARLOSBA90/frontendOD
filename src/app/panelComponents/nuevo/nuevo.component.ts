import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }
  data: string = "datos";

  @ViewChild("myEditor", { static: false }) myEditor: any;

  ngOnInit(): void {
  }


  enviar() {
    alert(this.data);
  }

}


