import { Component, OnInit, Input} from '@angular/core';
import { Movie } from 'src/app/models/movie';
import {Router} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  constructor() {
    const movie = localStorage.getItem('data');
   }

   ngOnInit() {
    // this.movie = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     this.user = params.get('user');
    //   })
    // );
    // //Do something with this.user
  }
  }
