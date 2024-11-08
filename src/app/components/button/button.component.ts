import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: ` <button>{{ btnlabel }}</button> `,
  styles: ``,
})
export class ButtonComponent {
  @Input() btnlabel: string = '';
}
