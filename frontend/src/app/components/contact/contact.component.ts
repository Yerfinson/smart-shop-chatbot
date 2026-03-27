import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contacto" class="py-24 bg-charcoal">
      <div class="container mx-auto px-6">

        <!-- Header -->
        <div class="text-center mb-16">
          <span class="inline-block text-primary font-semibold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-4">
            Contacto
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Estamos para ayudarte
          </h2>
          <p class="text-white/40 text-lg max-w-md mx-auto">
            ¿Tienes alguna pregunta? Nuestro equipo y asistente IA están listos para ayudarte.
          </p>
        </div>

        <!-- Info de contacto -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

          <!-- Email -->
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white/60 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p class="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
            <p class="text-white font-medium">hola&#64;styleshop.com</p>
          </div>

          <!-- Teléfono -->
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white/60 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <p class="text-white/40 text-xs uppercase tracking-wider mb-1">Teléfono</p>
            <p class="text-white font-medium">+1 (555) 123-4567</p>
          </div>

          <!-- Horario -->
          <div class="text-center group">
            <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white/60 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-white/40 text-xs uppercase tracking-wider mb-1">Horario</p>
            <p class="text-white font-medium">Lun – Sáb, 9am – 8pm</p>
            <p class="text-accent text-sm mt-1">IA disponible 24/7</p>
          </div>

        </div>

        <!-- Footer mínimo -->
        <div class="text-center mt-20 pt-8 border-t border-white/10">
          <p class="text-white/20 text-sm">© 2025 StyleShop. Todos los derechos reservados.</p>
        </div>

      </div>
    </section>
  `,
})
export class ContactComponent {}
