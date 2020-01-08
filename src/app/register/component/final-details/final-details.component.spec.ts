import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDetailsComponent } from './final-details.component';

describe('FinalDetailsComponent', () => {
  let component: FinalDetailsComponent;
  let fixture: ComponentFixture<FinalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
