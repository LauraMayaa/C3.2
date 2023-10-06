import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  public isHighlight: boolean = false
  public isShowingMovies: boolean = true

  public highlight() {
    this.isHighlight = !this.isHighlight
  }

  public showMovies() {
    this.isShowingMovies = !this.isShowingMovies
  }
}
