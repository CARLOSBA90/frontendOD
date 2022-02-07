import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     this.formLogin = this.formBuilder.group( {
       user: ['',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15)
            ]
            ],
       contra: ['',
          [
             Validators.required,
             Validators.minLength(5),
             Validators.maxLength(15)
          ]
               ]
     });
  }

  send(): any {
    console.log(this.formLogin.value);
  }

}
