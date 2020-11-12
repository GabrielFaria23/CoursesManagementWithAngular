import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { Error404Component } from './core/component/error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([      
      {
      path: '', redirectTo: 'courses', pathMatch: 'full'
      }
    ])//forRoot: inicializar as rotas assim que a aplicação iniciar 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
