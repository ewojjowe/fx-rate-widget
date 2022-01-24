import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { FxRatesService } from './fx-rates.service';

describe('FxRatesService', () => {
  let httpTestingController: HttpTestingController;
  let service: FxRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(FxRatesService);
    // service = TestBed.inject(FxRatesService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#getFxRate should return expected data', (done) => {
    const expectedData: any = {
      "success": true,
      "timestamp": 1643047457,
      "base": "EUR",
      "date": "2022-01-24",
      "rates": {
      "USD": 1.13301
      }
    };

    service.getFxRate('USD').subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://api.exchangeratesapi.io/v1/latest?access_key=f1fd1f5ce0b895913a96900d70805630&symbols=USD&format=1');

    testRequest.flush(expectedData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
