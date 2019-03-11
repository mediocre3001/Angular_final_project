import { Component, OnInit, Input } from '@angular/core';
import { Phim } from '../../models/phim';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() phim: Phim;
  constructor() { }

  ngOnInit() {
  }

}
