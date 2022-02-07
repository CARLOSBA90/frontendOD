import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  public Editor = ClassicEditor;
  public formContent!: FormGroup;
  data: string = "datos";
  @ViewChild("myEditor", { static: false }) myEditor: any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     this.formContent = this.formBuilder.group( {
        titulo:  ['', Validators.required ],
        seccion: ['', Validators.required ],
        imagen1: ['', Validators.required ],
        imagen2: ['', ],
        autor:   ['', Validators.required ],
        activo:  ['', Validators.required ],
        data:    ['', Validators.required ]
    });
  }


  send(): any {
    console.log(this.formContent.value);
  }

}


