import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  CurrencyMaskConfig,
  CurrencyMaskModule,
  CURRENCY_MASK_CONFIG,
} from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CurrencyMaskModule, FormsModule],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
