import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/// Bootstraps
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './panelComponents/principal/principal.component';
import { ArticulosComponent } from './panelComponents/articulos/articulos.component';
import { NuevoComponent } from './panelComponents/nuevo/nuevo.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    NewsComponent,
    PanelComponent,
    LoginComponent,
    PrincipalComponent,
    ArticulosComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
