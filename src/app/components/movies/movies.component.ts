import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Movie} from '../../models/movie';
import {FetchService} from 'src/app/services/fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
 movies: Movie[];
  constructor(private fs: FetchService, private router: Router) { }
  jsonPath = 'assets/movies.json';

  // showDetails(movie) {
  //   this.router.navigate(['/details', { movie}]);
  // }
  ngOnInit() {
    // this.moviesService.getMovies().subscribe(movies => {
    //   console.log(movies);
    //   this.movies = movies;
      this.fs.getJSON(this.jsonPath).subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    });
  }
  navigateToOtherComponent(data) {
    localStorage.setItem('movie', data);
    this.router.navigate(['src/app/components/details/details.component.ts']);
    }

}
