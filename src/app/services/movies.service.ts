import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument } from 'angularfire2/firestore';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    moviesCollection: AngularFirestoreCollection<Movie>;
    movies: Observable<Movie[]>;
    constructor(public micro: AngularFirestore) {
    this.movies = this.micro.collection('movies').valueChanges();
   }
getMovies() {
  return this.movies;
}
}

