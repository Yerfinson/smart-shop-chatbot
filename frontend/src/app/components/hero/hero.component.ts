import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-stone flex items-center overflow-hidden">
      <div class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16">

        <!-- Contenido izquierdo -->
        <div class="flex-1 space-y-8 text-center md:text-left">
          <span class="inline-block text-accent font-semibold text-sm uppercase tracking-widest bg-accent-light px-4 py-2 rounded-full">
            StyleShop — Tu tienda de moda
          </span>

          <h1 class="text-5xl md:text-6xl font-bold text-charcoal leading-tight">
            Tu asistente<br />de moda,<br />
            <span class="text-primary">siempre disponible</span>
          </h1>

          <p class="text-lg text-charcoal/60 max-w-md mx-auto md:mx-0 leading-relaxed">
            Descubre nuestra colección y consulta al asistente IA sobre tallas,
            precios y disponibilidad. Atención personalizada, 24/7, sin esperas.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#productos"
              class="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 text-center"
            >
              Ver Colección
            </a>
            <a
              href="#nosotros"
              class="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-charcoal hover:text-white transition-colors text-center"
            >
              Conoce más
            </a>
          </div>

          <!-- Métricas -->
          <div class="flex gap-8 justify-center md:justify-start pt-4">
            <div>
              <p class="text-3xl font-bold text-charcoal">+200</p>
              <p class="text-sm text-charcoal/50">Productos</p>
            </div>
            <div class="w-px bg-charcoal/10"></div>
            <div>
              <p class="text-3xl font-bold text-charcoal">24/7</p>
              <p class="text-sm text-charcoal/50">Asistencia IA</p>
            </div>
            <div class="w-px bg-charcoal/10"></div>
            <div>
              <p class="text-3xl font-bold text-charcoal">4.9★</p>
              <p class="text-sm text-charcoal/50">Valoración</p>
            </div>
          </div>
        </div>

        <!-- Decoración derecha -->
        <div class="flex-1 flex justify-center items-center">
          <div class="relative w-72 h-72 md:w-96 md:h-96">
            <!-- Círculo exterior accent -->
            <div class="absolute inset-0 bg-accent-light rounded-full"></div>
            <!-- Círculo medio primary -->
            <div class="absolute inset-8 bg-primary-light rounded-full"></div>
            <!-- Círculo interior con ícono -->
            <div class="absolute inset-16 bg-white rounded-full shadow-xl flex items-center justify-center">
              <!-- Ícono de ropa (SVG) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-20 h-20 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
            </div>
            <!-- Burbujas decorativas flotantes -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full opacity-20"></div>
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-15"></div>
            <div class="absolute top-8 -left-8 w-10 h-10 bg-primary-light rounded-full border-2 border-primary/20"></div>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class HeroComponent {}
