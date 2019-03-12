import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranDangKyComponent } from './tran-dang-ky.component';

describe('TranDangKyComponent', () => {
  let component: TranDangKyComponent;
  let fixture: ComponentFixture<TranDangKyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranDangKyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranDangKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
