import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('AppComponent', () => {
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    httpTestingController = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as buy 'Buy'`, () => {
    const app = fixture.componentInstance;
    expect(app.buy).toEqual('Buy');
  });

  it(`should have as sell 'Sell'`, () => {
    const app = fixture.componentInstance;
    expect(app.sell).toEqual('Sell');
  });

  it(`should have as base 'EUR'`, () => {
    const app = fixture.componentInstance;
    expect(app.base).toEqual('EUR');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('FX Rates Widget');
  });
});
