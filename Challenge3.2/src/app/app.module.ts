import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayDirective } from './display.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HighlightDirective,
    DisplayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
