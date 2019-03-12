import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tran-dang-ky',
  templateUrl: './tran-dang-ky.component.html',
  styleUrls: ['./tran-dang-ky.component.css']
})
export class TranDangKyComponent implements OnInit {
  @ViewChild('formDangKy') formDK: NgForm;
  mangNguoiDungDangKy:any[] = [];
  DangKy(value){
    this.mangNguoiDungDangKy.push(value);
    this.formDK.reset();
    console.log(this.mangNguoiDungDangKy);
  }
  gioiTinh = 0;
  constructor() { }

  ngOnInit() {
  }

}
