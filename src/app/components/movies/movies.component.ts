import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Movie} from '../../models/movie';
import {FetchService} from 'src/app/services/fetch.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
 movies: Movie[];
  constructor(private fs: FetchService) { }
  jsonPath = 'assets/movies.json';
  ngOnInit() {
    // this.moviesService.getMovies().subscribe(movies => {
    //   console.log(movies);
    //   this.movies = movies;
      this.fs.getJSON(this.jsonPath).subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }

}
