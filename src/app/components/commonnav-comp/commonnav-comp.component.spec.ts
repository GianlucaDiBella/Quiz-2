import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonnavCompComponent } from './commonnav-comp.component';

describe('CommonnavCompComponent', () => {
  let component: CommonnavCompComponent;
  let fixture: ComponentFixture<CommonnavCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonnavCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonnavCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
