import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardsServiziComponent } from '../cards-servizi/cards-servizi.component';

@Component({
  selector: 'app-servizi-section',
  standalone: true,
  imports: [NgFor, CardsServiziComponent],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <app-cards-servizi
        *ngFor="let servizio of servizi"
        [titolo]="servizio.titolo"
        [dettagli]="servizio.dettagli"
      ></app-cards-servizi>
    </div>
  `,
  styles: ``,
})
export class ServiziSectionComponent {
  servizi: any = [
    {
      titolo: 'Psicologia Clinica',
      dettagli: [
        'Supporto per Disturbi della Personalità',
        'Gestione dei Disturbi d’Ansia',
        'Interventi per Disturbi dell’Umore',
        'Supporto per lo Spettro Autistico',
      ],
    },
    {
      titolo: 'Età Evolutiva e Scolastica',
      dettagli: [
        'Interventi per DSA',
        'Gestione delle difficoltà scolastiche',
        'Arteterapia per bambini e adolescenti',
      ],
    },
    {
      titolo: 'Arteterapia e Crescita Personale',
      dettagli: [
        'Arteterapia per benessere emotivo',
        'Percorsi di consapevolezza',
        'Gestione dello stress con tecniche artistiche',
      ],
    },
    {
      titolo: 'Mindfulness e Yoga',
      dettagli: [
        'Pratiche Mindfulness per ridurre stress',
        'Yoga come supporto alla gestione emotiva',
      ],
    },
    {
      titolo: 'Psicoterapia (in formazione)',
      dettagli: [
        'Approccio umanistico-esistenziale',
        'Supporto per crisi esistenziali',
        'Gestione delle relazioni interpersonali',
      ],
    },
    {
      titolo: 'Disturbi d’Ansia',
      dettagli: [
        'Disturbo d’ansia generalizzata (GAD)',
        'Disturbo di panico',
        'Fobie specifiche',
        'Ansia sociale (fobia sociale)',
      ],
    },
    {
      titolo: 'Disturbi dell’Umore',
      dettagli: [
        'Depressione maggiore',
        'Distimia (depressione cronica di lieve entità)',
        'Disturbo bipolare',
      ],
    },
    {
      titolo: 'Consulenze Psicologiche per Adulti',
      dettagli: [
        'Gestione delle difficoltà relazionali e familiari',
        'Supporto nelle fasi di cambiamento e nelle scelte di vita',
      ],
    },
    {
      titolo: 'Disturbi Ossessivo-Compulsivi e Correlati',
      dettagli: [
        'Disturbo ossessivo-compulsivo (DOC)',
        'Disturbo da accumulo (hoarding)',
        'Disturbo dismorfico corporeo',
      ],
    },
    {
      titolo: 'Disturbi della Personalità',
      dettagli: [
        'Disturbo narcisistico di personalità',
        'Disturbo borderline di personalità',
        'Disturbo evitante di personalità',
        'Disturbo dipendente di personalità',
      ],
    },
    {
      titolo: 'Disturbi dello Spettro Autistico',
      dettagli: [
        'Sindrome di Asperger (oggi ricompresa nello spettro autistico secondo il DSM-5)',
      ],
    },
    {
      titolo: 'Disturbi Relazionali',
      dettagli: [
        'Difficoltà nella gestione delle relazioni interpersonali',
        'Problemi di coppia e familiari',
      ],
    },
    {
      titolo: 'Disturbi legati allo Stress',
      dettagli: [
        'Disturbo da stress post-traumatico (PTSD)',
        'Disturbo acuto da stress',
        'Burnout',
      ],
    },
    {
      titolo: 'Disturbi Psicosomatici',
      dettagli: [
        'Gestione di sintomi fisici legati a stress e disagio psicologico',
      ],
    },
    {
      titolo: 'Difficoltà legate alla Sfera Scolastica e Lavorativa',
      dettagli: [
        'Disturbi specifici dell’apprendimento (DSA)',
        'Ansia da prestazione e difficoltà lavorative',
      ],
    },
  ];
}
