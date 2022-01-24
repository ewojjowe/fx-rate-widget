import { Component, OnInit, Input } from '@angular/core';

// Interface
import { FormInput } from '../../models/form-input.interface'

@Component({
  selector: 'app-rate-calculator',
  templateUrl: './rate-calculator.component.html',
  styleUrls: ['./rate-calculator.component.scss']
})
export class RateCalculatorComponent implements OnInit {

  @Input() actionLabel: string
  @Input() isLoading: boolean = true
  @Input() currencyRates: any

  form: FormInput = {
    currency: "USD",
    amount: 0,
    value: 0
  }

  ngOnInit(): void {
  }

  handleChange() {
    const { amount, currency } = this.form
    this.form.value = amount * this.currencyRates[currency]
  }

}
