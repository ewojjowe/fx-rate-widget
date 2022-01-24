import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCalculatorComponent } from './rate-calculator.component';

describe('RateCalculatorComponent', () => {
  let component: RateCalculatorComponent;
  let fixture: ComponentFixture<RateCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
