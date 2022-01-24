import { Component } from '@angular/core';
import {Subscription} from 'rxjs';

// Services
import { FxRatesService } from './common/services/fx-rates.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getCurrencySubscription: Subscription

  buy: string = 'Buy'
  sell: string = 'Sell'
  base: string
  isLoading: boolean
  currencyRates: any

  constructor(
    private fxRatesService: FxRatesService
  ) {
    this.isLoading = true
    this.buy = 'Buy'
    this.sell = 'Sell'
    this.base = 'EUR'
    this.currencyRates = {}
  }

  ngOnInit(): void {
    this.getCurrency()
  }

  getCurrency() {
    this.getCurrencySubscription = this.fxRatesService
      .getCurrency()
      .subscribe(
        data => {
          this.currencyRates = data['rates']
          this.base = data['base']
          this.isLoading = false
        },
        error => {
          alert('Something went wrong! Please try again later.')
          this.isLoading = false
        }
      )
  }
}
