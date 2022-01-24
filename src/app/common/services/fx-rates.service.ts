import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FxRatesService {

  accessKey: string = 'f1fd1f5ce0b895913a96900d70805630'
  apiDomain: string = 'http://api.exchangeratesapi.io/v1/latest'

  constructor(
    private httpClient: HttpClient
  ) {

  }

  public getFxRate(currency: string): Observable<any> {
    const httpLink = `${this.apiDomain}?access_key=${this.accessKey}&symbols=${currency}&format=1`

    return this.httpClient.get<any>(httpLink)
      .pipe(
        map(data => {
         return data
        })
      )
  }

  public getCurrency(): Observable<any> {
    const httpLink = `${this.apiDomain}?access_key=${this.accessKey}&format=1`

    return this.httpClient.get<any>(httpLink)
      .pipe(
        map(data => {
         return data
        })
      )
  }
}
