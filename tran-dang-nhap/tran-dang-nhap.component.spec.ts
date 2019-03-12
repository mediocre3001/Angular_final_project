import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranDangNhapComponent } from './tran-dang-nhap.component';

describe('TranDangNhapComponent', () => {
  let component: TranDangNhapComponent;
  let fixture: ComponentFixture<TranDangNhapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranDangNhapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranDangNhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
