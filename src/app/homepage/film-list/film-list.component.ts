import { Component, OnInit } from '@angular/core';
import { PhimApiService} from '../../services/phim-api.service';
import { Phim } from '../../models/phim';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  danhSachPhim : Phim[] = [];
  constructor(private _filmSV:PhimApiService ) { }

  ngOnInit() {
    this._filmSV.getDanhSachPhim().subscribe(
      (res:any) => {
        console.log(res);
        this.danhSachPhim = res;
        
      },
      (err:any) => {
        console.log(err);
        
      }
    )
 
  }

}
