import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <input currencyMask [(ngModel)]="value" /> `,
})
export class AppComponent {
  value?: number;
}
