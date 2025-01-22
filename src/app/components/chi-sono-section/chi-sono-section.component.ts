import { Component } from '@angular/core';

@Component({
  selector: 'app-chi-sono-section',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col  mt-20 mb-20">
      <!-- Prima sezione: Foto profilo -->
      <div
        class="flex  flex-col md:flex-row items-center md:items-start gap-32"
      >
        <img
          class="w-64 h-64 object-cover rounded-full border-40 foto_profilo"
        />
        <div class="text-center md:text-left max-w-prose">
          <h2 class="text-2xl font-bold mb-10 text-blue-400">Chi Sono</h2>
          <p class="text-gray-700 leading-relaxed p-5">
            Mi chiamo Giulia Spanu, sono nata nel 1993 a Roma, una città che mi
            ha cresciuta e ispirata con la sua bellezza e il suo patrimonio
            culturale. Sono figlia di un musicista e psicoterapeuta e di
            un’artista, due figure che mi hanno trasmesso fin dall'infanzia il
            valore dell’espressione creativa e la profondità dello studio della
            mente umana. Questo intreccio tra arte e psicologia ha segnato il
            mio cammino, portandomi a sviluppare una profonda sensibilità verso
            l'interiorità dell'essere umano.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4 p-5">
            Fin da bambina mi sentivo attratta da ciò che si cela dietro i
            pensieri, le emozioni e le azioni delle persone. Allo stesso tempo,
            amavo esplorare la mia creatività attraverso l'arte, che consideravo
            un linguaggio universale capace di raccontare ciò che spesso non
            trova voce nelle parole.
          </p>
        </div>
      </div>
      <!-- Seconda sezione: Foto Yoga -->
      <div
        class="flex flex-col md:flex-row items-center md:items-start gap-32 mt-20"
      >
        <img class="w-64 h-64 object-cover rounded-full foto_yoga " />
        <div class="text-center md:text-left max-w-prose">
          <p class="text-gray-700 leading-relaxed p-5">
            A 14 anni ho incontrato il Kundalini Yoga, un’esperienza che ha
            cambiato la mia vita. Mi sono immersa completamente in questa
            disciplina, trovando in essa non solo un potente strumento di
            benessere, ma anche un modo per connettermi profondamente con me
            stessa. A 18 anni, ho ottenuto la certificazione come insegnante di
            Kundalini Yoga e, per diversi anni, ho insegnato questa pratica in
            un’associazione culturale, di cui sono stata Presidente dal 2014 al
            2019.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4 p-5">
            Parallelamente, ho intrapreso gli studi universitari in Psicologia,
            un percorso che sentivo come una naturale estensione del mio
            interesse per l’animo umano. Ho conseguito la laurea nel 2020, dopo
            anni di studio e crescita personale, e ho proseguito con un
            tirocinio abilitante incentrato sull’approccio psicodinamico e lo
            psicodramma. Nel 2023 ho superato l’Esame di Stato presso
            l’Università di Pavia, diventando ufficialmente Psicologa.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4 p-5">
            Sin da subito ho lavorato con dedizione, sia in ambito privato che
            scolastico. L’esperienza a contatto con studenti, molti dei quali
            con DSA e ADHD, mi ha insegnato quanto sia importante offrire un
            ascolto autentico e strumenti concreti per affrontare le difficoltà
            quotidiane.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row items-center md:items-start gap-32 mt-20"
      >
        <img class="w-64 h-64 object-cover   foto_arte" />
        <div class="text-center md:text-left max-w-prose">
          <p class="text-gray-700 leading-relaxed p-5">
            Oggi sono specializzanda in Psicoterapia Umanistico Esistenziale, un
            approccio che mette al centro l’individuo nella sua unicità,
            valorizzandone risorse e potenzialità. Il mio lavoro come Psicologa
            si distingue per un approccio integrato: alla terapia tradizionale
            affianco l’arte come potente mezzo di espressione e guarigione,
            unendo le mie competenze di artista e arteterapeuta. Inoltre,
            integro tecniche yogiche di respirazione e rilassamento, aiutando i
            miei pazienti a riconnettersi con il proprio corpo e a gestire
            meglio lo stress.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4 p-5">
            Credo profondamente che ogni persona abbia in sé la capacità di
            trasformare le proprie ferite in forza e creatività. Il mio compito
            è accompagnare chi si affida a me in questo viaggio di scoperta,
            offrendogli uno spazio sicuro dove sentirsi accolto e compreso.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4 p-5">
            Se vuoi conoscermi meglio o iniziare un percorso insieme, sarò
            felice di incontrarti.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: `
.foto_profilo {
    background-image: url('src/assets/giuliafoto.jpeg');
    background-size: cover;
    background-position: center;
  
  }
  .foto_yoga{
    background-image: url('src/assets/yogagiuliaimg.jpeg');
    background-size: cover;
    background-position: center;
  }
  .foto_arte{
    background-image: url('src/assets/arteterapiaimg.jpeg');
    background-size: cover;
    background-position: center;
  }
  `,
})
export class ChiSonoSectionComponent {}
