import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApilogsComponent } from './apilogs.component';

describe('ApilogsComponent', () => {
  let component: ApilogsComponent;
  let fixture: ComponentFixture<ApilogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApilogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApilogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
