import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="nosotros" class="py-24 bg-accent-light">
      <div class="container mx-auto px-6">

        <!-- Header -->
        <div class="text-center mb-16">
          <span class="inline-block text-accent font-semibold text-sm uppercase tracking-widest bg-white px-4 py-2 rounded-full mb-4">
            Por qué elegirnos
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            La moda con inteligencia
          </h2>
          <p class="text-charcoal/50 text-lg max-w-lg mx-auto">
            StyleShop combina moda de calidad con tecnología de IA para brindarte
            la mejor experiencia de compra.
          </p>
        </div>

        <!-- Features grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <!-- Feature: IA 24/7 -->
          <div class="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-charcoal mb-3">Asistente IA 24/7</h3>
            <p class="text-charcoal/55 leading-relaxed">
              Nuestro asistente powered by Gemini responde tus preguntas sobre
              productos, tallas y disponibilidad en cualquier momento del día.
            </p>
          </div>

          <!-- Feature: Calidad garantizada -->
          <div class="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-accent-light rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-charcoal mb-3">Calidad garantizada</h3>
            <p class="text-charcoal/55 leading-relaxed">
              Cada prenda está cuidadosamente seleccionada. Materiales premium,
              cortes modernos y acabados que duran. Tu satisfacción es nuestra prioridad.
            </p>
          </div>

          <!-- Feature: Asesoramiento personalizado -->
          <div class="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-charcoal mb-3">Asesoramiento personalizado</h3>
            <p class="text-charcoal/55 leading-relaxed">
              La IA te ayuda a encontrar la talla perfecta, recomienda combinaciones
              y responde dudas específicas sobre cada producto de nuestra colección.
            </p>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class AboutComponent {}
