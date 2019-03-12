import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-tran-dang-nhap',
  templateUrl: './tran-dang-nhap.component.html',
  styleUrls: ['./tran-dang-nhap.component.css']
})
export class TranDangNhapComponent implements OnInit {
  formDangNhap: FormGroup;
  DangNhap(){
    console.log(this.formDangNhap.value);
    
  }
  constructor() { }

  ngOnInit() {
    this.formDangNhap = new FormGroup ({
      'Email': new FormControl(null),
      'PassWord': new FormControl(null)
    })
  }

}
