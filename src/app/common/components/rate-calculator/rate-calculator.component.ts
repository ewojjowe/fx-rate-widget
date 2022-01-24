import { Component, OnInit, Input } from '@angular/core';

// Interface
import { FormInput } from '../../models/form-input.interface'

@Component({
  selector: 'app-rate-calculator',
  templateUrl: './rate-calculator.component.html',
  styleUrls: ['./rate-calculator.component.scss']
})
export class RateCalculatorComponent implements OnInit {

  @Input() actionLabel: string = 'Buy'
  @Input() isLoading: boolean = true
  @Input() currencyRates: any = []
  @Input() base: string = 'EUR'

  form: FormInput = {
    currency: "USD",
    amount: 0,
    value: 0
  }

  ngOnInit(): void {
  }

  handleCurrencyChange() {
    const { amount, currency } = this.form
    this.form.value = amount * this.currencyRates[currency]
  }

  handleAmountChange(event: any) {
    const newAmountValue = event
    const { currency } = this.form

    this.form.amount = newAmountValue
    this.form.value = newAmountValue * this.currencyRates[currency]
  }

}
