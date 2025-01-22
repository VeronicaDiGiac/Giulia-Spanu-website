import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  template: ` <button>{{ btnlabel }}</button> `,
  styles: ``,
})
export class ButtonComponent {
  @Input() btnlabel: string = '';
}
