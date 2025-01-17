import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-cards-servizi',
  standalone: true,
  imports: [NgFor, NgClass],
  template: `
    <div
      class="bg-blue-100 shadow-lg rounded-lg p-6 h-56 overflow-y-auto hover:bg-blue-200"
      [ngClass]="{
        'bg-blue-100 hover:bg-blue-200': !sfondoGiallo,
        'bg-yellow-100 hover:bg-yellow-200 ': sfondoGiallo,
        ' bg-pink-100 hover:bg-pink-200': sfondoRosa,
      }"
    >
      <h3 class="text-xl font-bold mb-4 text-gray-700">
        {{ titolo }}
      </h3>
      <ul class="list-disc list-inside text-gray-800">
        <li *ngFor="let dettaglio of dettagli">{{ dettaglio }}</li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class CardsServiziComponent {
  @Input() titolo: string = '';
  @Input() dettagli: string[] = [];
  @Input() sfondoGiallo: boolean = false;
  @Input() sfondoRosa: boolean = false;
}
