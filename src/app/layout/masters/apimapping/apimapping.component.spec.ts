import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimappingComponent } from './apimapping.component';

describe('ApimappingComponent', () => {
  let component: ApimappingComponent;
  let fixture: ComponentFixture<ApimappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApimappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApimappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
