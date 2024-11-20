import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cards-servizi',
  standalone: true,
  imports: [NgFor],
  template: `
    <div
      class="bg-blue-100 shadow-lg rounded-lg p-6 h-56 overflow-y-auto hover:bg-blue-200"
    >
      <h3 class="text-xl font-bold mb-4 text-blue-400">
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
}
