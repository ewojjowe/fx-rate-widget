import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RateCalculatorComponent } from './rate-calculator.component';

describe('RateCalculatorComponent', () => {
  let component: RateCalculatorComponent;
  let fixture: ComponentFixture<RateCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateCalculatorComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCalculatorComponent);
    component = fixture.componentInstance;
    component.actionLabel = 'Buy'
    component.isLoading = true
    component.currencyRates = []
    component.base = 'EUR'

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have label as 'Buy'`, () => {
    const app = fixture.componentInstance;
    expect(app.actionLabel).toEqual('Buy');
  });

  it(`should have isLoading as 'true'`, () => {
    const app = fixture.componentInstance;
    expect(app.isLoading).toBe(true);
  });

  it(`should have base as 'EUR'`, () => {
    const app = fixture.componentInstance;
    expect(app.base).toEqual('EUR');
  });
});
