import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, ContactComponent, RouterLink, RouterModule],
  template: `
    <div
      class="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-10 sm: mb-5>"
    >
      <!-- Colonna con testo -->
      <div class="w-full md:w-1/2 text-center md:text-left sm:text-center">
        <h1 class="lg:text-4xl font-bold mb-4 sm: text-2xl">
          Ogni emozione merita ascolto e comprensione.
        </h1>
        <p class="text-gray-600 leading-relaxed lg:text-xl sm:text-md">
          La nostra mente è complessa e affascinante, capace di provare una
          vasta gamma di emozioni, tutte meritevoli di ascolto e di
          comprensione. Mi impegno ad accompagnarti nel percorso di esplorazione
          interiore, aiutandoti a riconoscere e valorizzare le tue esperienze
          emotive. Insieme possiamo lavorare per sviluppare una consapevolezza
          profonda, verso una maggiore serenità e equilibrio.
        </p>
        <app-button
          [btnlabel]="'Contatti'"
          [routerLink]="'/contatti'"
          class="btn btn-lg rounded-full bg-blue-300 border-0 hover:bg-blue-200 m-5 p-5 "
        ></app-button>
      </div>

      <!-- Colonna con immagine -->
      <div class="flex justify-center items-center sm:mt-5">
        <div class="w-full md:w-1/2">
          <div class="home-background lg:w-full h-72 md:h-96 sm:w-32"></div>
        </div>
      </div>
    </div>

    <!-- Colonna Chi siamo -->
    <div
      class="flex flex-col items-start justify-start mt-2 mb-15 px-10 md:px-20 mb-20"
    >
      <p
        class="text-gray-600  w-full max-w-3xl h-auto leading-relaxed lg:text-xl sm:text-sm"
      >
        Mi chiamo
        <span class="lg:text-4xl font-bold sm: text-3xl text-blue-500 p-3"
          >Giulia Spanu</span
        >, sono nata a Roma nel 1993, e sono una Psicologa Clinica
        specializzanda in Psicoterapia Umanistico Esistenziale, Arteterapeuta ed
        Insegnante certificata KRI di Kundalini Yoga. Sono sempre stata attratta
        dall'interiorità dell'essere umano, dalla Psiche, e da tutti quelle
        spinte inconsce che spesso sembrano dirigere la nostra vita in maniera
        non del tutto consapevole.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      <!-- Card Ansia -->
      <div class="card bg-blue-100 shadow-lg rounded-lg p-6">
        <div class="flex items-center mb-4">
          <h2 class="text-2xl font-semibold text-blue-600 ">Ansia</h2>
        </div>
        <p class="text-gray-700">
          L'ansia è una risposta emotiva naturale, ma se non gestita può
          interferire con la vita quotidiana. Scopri come affrontarla con
          strategie efficaci.
        </p>
        <a
          [routerLink]="'/servizi'"
          class="mt-4 text-blue-500 hover:text-blue-700"
          >Scopri di più</a
        >
      </div>

      <!-- Card Depressione -->
      <div class="card bg-purple-100 shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-purple-600 mb-4">Depressione</h2>
        <p class="text-gray-700">
          La depressione può portare a sentimenti di tristezza persistente.
          Scopri le risorse e i trattamenti disponibili per migliorare il tuo
          benessere.
        </p>
        <a
          [routerLink]="'/servizi'"
          class="mt-4 text-purple-500 hover:text-purple-700"
          >Scopri di più</a
        >
      </div>

      <!-- Card Adolescenza -->
      <div class="card bg-green-100 shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-green-600 mb-4">Stress</h2>
        <p class="text-gray-700">
          Lo stress è una risposta psicofisica a compiti anche diversi tra loro,
          di natura emotiva, cognitiva o sociale, che la persona percepisce come
          eccessivi.
        </p>
        <a
          [routerLink]="'/servizi'"
          class="mt-4 text-green-500 hover:text-green-700"
          >Scopri di più</a
        >
      </div>
    </div>
    <!-- Colonna albero -->
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-8 mt-10"
    >
      <!-- Immagine a sinistra -->
      <div
        class="w-full md:w-1/2 flex justify-center md:justify-start sm:mt-5 "
      >
        <div class="home-background-albero w-full h-72 md:h-96"></div>
      </div>

      <!-- Descrizione a destra -->
      <div class="w-full md:w-1/2 text-center md:text-left p-5">
        <h1 class=" lg:text-3xl font-bold mb-4 sm: text-2xl">
          Concentrati su ciò che conta di più
        </h1>
        <p class="text-gray-600 leading-relaxed lg:text-xl sm:text-sm">
          Prenditi il tempo per ascoltare ciò che davvero conta dentro di te.
          Spesso, tra i ritmi frenetici della vita quotidiana, perdiamo di vista
          il nostro benessere interiore e ciò che è essenziale per la nostra
          serenità. Sono qui per aiutarti a riscoprire il tuo equilibrio, a fare
          chiarezza sui tuoi bisogni più profondi e a trovare nuovi modi per
          affrontare le sfide della vita con maggiore consapevolezza e
          sicurezza.
        </p>
        <app-button
          [btnlabel]="'Servizi'"
          [routerLink]="'/servizi'"
          class="btn lg:btn-lg rounded-full bg-blue-300 border-0 hover:bg-blue-200 m-5 p-5 sm btn-lg"
        ></app-button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      <!-- Card  -->
      <div class="card bg-blue-100 shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-blue-600 mb-4">
          Sedute di coppia
        </h2>
        <p class="text-gray-700">
          Rafforza la tua relazione esplorando dinamiche di coppia,
          comunicazione e gestione dei conflitti per creare una connessione più
          profonda e duratura.
        </p>
        <a
          [routerLink]="'/servizi'"
          class="mt-4 text-blue-500 hover:text-blue-700"
          >Scopri di più</a
        >
      </div>

      <!-- Card  -->
      <div class="card bg-purple-100 shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-purple-600 mb-4">
          Sedute Singole
        </h2>
        <p class="text-gray-700">
          Percorso individuale per affrontare ansia, stress o altre difficoltà
          personali, con l’obiettivo di ritrovare equilibrio e benessere
          interiore.
        </p>
        <a
          [routerLink]="'/servizi'"
          class="mt-4 text-purple-500 hover:text-purple-700"
          >Scopri di più</a
        >
      </div>

      <!-- Card  -->
      <div class="card bg-green-100 shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-green-600 mb-4">
          Sedute familiari
        </h2>
        <p class="text-gray-700">
          Supporto per famiglie che affrontano cambiamenti o sfide relazionali,
          per migliorare la comunicazione e creare un ambiente familiare più
          armonioso.
        </p>
        <a
          [routerLink]="'/servizi'"
          class="mt-4 text-green-500 hover:text-green-700"
          >Scopri di più</a
        >
      </div>
    </div>
    <!-- YOGA  -->

    <div
      class="flex flex-col md:flex-row items-center justify-between gap-8 mt-20"
    >
      <!-- Immagine a sinistra -->
      <div
        class="w-full md:w-1/2 flex justify-center md:justify-center sm:mt-5 "
      >
        <div class="home-background-yoga lg:mb-20 md:h-96 sm:mb-0"></div>
      </div>

      <!-- Descrizione a destra -->
      <div class="w-full md:w-1/2 text-center md:text-left p-5 ">
        <h1 class="lg:text-3xl font-bold mb-4 sm: text-2xl">
          Come ho scoperto lo Yoga?
        </h1>
        <p class="text-gray-600 leading-relaxed lg:text-xl sm:text-sm">
          All'età di 14 anni, ho iniziato a esplorare le filosofie orientali,
          intraprendendo un percorso di introspezione e meditazione attraverso
          la pratica dello yoga. Questa esperienza mi ha guidato verso una
          profonda comprensione di me stessa e, dopo essere diventata insegnante
          di yoga a 18 anni, ho sentito il desiderio di approfondire
          ulteriormente la conoscenza del benessere psicologico. Questo
          interesse mi ha portata a intraprendere gli studi in Psicologia, dove
          ho compreso di aver trovato la mia vera vocazione. Dopo anni di studi
          accademici, tirocinio e l’ottenimento dell’abilitazione alla
          professione di Psicologa, ho iniziato ad accogliere i miei primi
          pazienti. Nel tempo, questo percorso mi ha consentito di crescere
          professionalmente e di realizzare il mio obiettivo: offrire un ascolto
          attento e autentico, sostenendo il benessere emotivo dell'Altro.
        </p>
        <app-button
          [btnlabel]="'Scopri di più'"
          [routerLink]="'/servizi'"
          class="btn btn-lg rounded-full bg-blue-300 border-0 hover:bg-blue-200 m-5 p-5"
        ></app-button>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 ">
      <!-- Card Yoga -->
      <div class="card bg-yellow-100 shadow-lg rounded-lg p-6 ">
        <h2 class="text-2xl font-semibold text-yellow-600 mb-4">Yoga</h2>
        <p class="text-gray-700">
          Esplora la pratica dello yoga come strumento per la connessione
          mente-corpo, favorendo equilibrio interiore, rilassamento e
          consapevolezza.
        </p>
        <a
          [routerLink]="'/servizi'"
          class="mt-4 inline-block text-yellow-500 hover:text-yellow-700"
          >Scopri di più</a
        >
      </div>

      <!-- Card Arte Terapia -->
      <div class="card bg-pink-100 shadow-lg rounded-lg p-6 ">
        <h2 class="text-2xl font-semibold text-pink-600 mb-4">Arte Terapia</h2>
        <p class="text-gray-700">
          Scopri come l’espressione creativa attraverso l’arte può aiutarti a
          esplorare emozioni, promuovere autoconoscenza e migliorare il
          benessere psicologico.
        </p>
        <a
          [routerLink]="'/servizi'"
          class="mt-4 inline-block text-pink-500 hover:text-pink-700"
          >Scopri di più</a
        >
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-10 mt-20 sm:mb-0"
    >
      <!-- Colonna con testo -->
      <div class="w-full md:w-1/2 text-center md:text-left sm:text-center ">
        <h1 class="lg:text-3xl font-bold mb-4 sm: text-2xl">
          Arte: una nostra alleata
        </h1>
        <p class="text-gray-600 leading-relaxed lg:text-xl sm:text-sm">
          In qualità di arteterapeuta, integro nelle mie sedute, quando
          appropriato o su richiesta, tecniche di espressione creativa per
          facilitare un percorso di esplorazione interiore. Attraverso l’uso
          libero di colori e forme, invito il paziente a riscoprire uno “sguardo
          puro” simile a quello dei bambini, lontano da giudizi o simboli
          predefiniti. Questo approccio permette di entrare in contatto con la
          parte più autentica e genuina del Sé, favorendo una profonda
          auto-espressione e una maggiore consapevolezza emotiva.
        </p>
        <app-button
          [btnlabel]="'Scopi di più'"
          [routerLink]="'/servizi'"
          class="btn btn-lg rounded-full bg-blue-300 border-0 hover:bg-blue-200 m-5 p-5"
        ></app-button>
      </div>

      <!-- Colonna con immagine -->
      <div class="flex justify-center items-center sm:mt-5">
        <div class="w-full md:w-1/2">
          <div class="home-background-arte w-full h-72 md:h-96"></div>
        </div>
      </div>
    </div>
    <!-- contatti -->
    <div class="text-center mt-10 sm:mt-20">
      <!-- Titolo -->
      <h1 class="lg:text-3xl font-bold mb-4 sm: text-2xl ">
        Vuoi saperne di più?
      </h1>

      <!-- Paragrafo -->
      <p class="text-gray-600 leading-relaxed text-xl sm:text-xl md:text-2xl">
        Contattami per un colloquio conoscitivo, senza impegno!
      </p>
    </div>

    <!-- Contenitore flessibile per la parte del contatto e l'immagine -->
    <div
      class="flex flex-col sm:flex-row justify-center sm:justify-around mt-10 sm:mt-16"
    >
      <!-- Componente di contatto -->
      <app-contact class="mb-6 sm:mb-0"></app-contact>

      <!-- Immagine della ragazza (visibile solo su schermi più larghi) -->
      <div class="home-background-girl sm:block hidden"></div>
    </div>
  `,
  styles: ` 
  .home-background {
    background-image: url('src/assets/homepagehandsimg.png');
    background-size: cover;
    background-position: top left;
    width:450px;
    height:600px;

  }
  .home-background-albero{
    background-image: url('src/assets/homepagesimgalbero.png');
    background-size: cover;
    background-position: top left;
    width:100%;
    height:600px;
  }
  .home-background-yoga{
    background-image: url('src/assets/yogaimg.png');
    background-size: cover;
    background-position: cover;
    width: 500px;
    height:400px;
  }
  .home-background-arte{
    background-image: url('src/assets/arteterapia.png');
    background-size: cover;
    background-position: cover;
    width: 300px;
    height:400px;
  }
  .home-background-girl{
    background-image: url('src/assets/girl.PNG');
    background-size: cover;
    background-position: cover;
    width: 300px;
    height:400px;
    position: relative;
   bottom: -190px;
  }
  @media (max-width: 768px) {
  .home-background {
    width: 300px;
    height: 400px;
  }
  .home-background-yoga {
    width: 400px; /* Dimensioni ridotte per smartphone */
    height: 350px;
  margin-left: -15px;
  }
}


  
`,
})
export class HomeComponent {
  homePageCards: any = [
    {
      titolo: 'Ansia',
      descrizione:
        "L'ansia è una risposta emotiva naturale, ma se non gestita può interferire con la vita quotidiana. Scopri come affrontarla con strategie efficaci.",
      icon: 'path/to/anxiety-icon.png',
    },
    {
      titolo: 'Depressione',
      descrizione:
        'La depressione può portare a sentimenti di tristezza persistente. Scopri le risorse e i trattamenti disponibili per migliorare il tuo benessere.',
      icon: 'path/to/depression-icon.png',
    },
    {
      titolo: 'Stress',
      descrizione:
        'Lo stress è una risposta psicofisica a compiti anche diversi tra loro, di natura emotiva, cognitiva o sociale, che la persona percepisce come eccessivi.',
      icon: 'path/to/stress-icon.png',
    },
  ];
}
