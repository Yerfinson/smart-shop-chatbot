import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      <!-- Panel del chat -->
      @if (isOpen()) {
        <div class="w-80 sm:w-96 h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-charcoal/5">

          <!-- Header -->
          <div class="bg-accent px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <div>
                <p class="text-white font-semibold text-sm leading-tight">StyleBot</p>
                <p class="text-white/60 text-xs">Asistente de StyleShop</p>
              </div>
            </div>
            <button
              (click)="isOpen.set(false)"
              class="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Cerrar chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Área de mensajes -->
          <div #messagesContainer class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">

            <!-- Mensaje de bienvenida cuando no hay historial -->
            @if (chatService.history().length === 0) {
              <div class="text-center py-8 px-4">
                <div class="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <p class="font-semibold text-charcoal text-sm mb-1">Hola, soy StyleBot</p>
                <p class="text-charcoal/40 text-xs leading-relaxed">
                  Pregúntame sobre productos, tallas, precios o disponibilidad. Estoy aquí para ayudarte.
                </p>
              </div>
            }

            <!-- Historial de mensajes -->
            @for (message of chatService.history(); track $index) {
              <div [class]="message.role === 'user' ? 'flex justify-end' : 'flex justify-start'">
                <div
                  [class]="
                    message.role === 'user'
                      ? 'bg-primary text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm shadow-primary/20'
                      : 'bg-white text-charcoal rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] border border-charcoal/5 shadow-sm'
                  "
                >
                  <p class="text-sm leading-relaxed whitespace-pre-wrap">{{ message.text }}</p>
                </div>
              </div>
            }

            <!-- Indicador de carga (typing dots) -->
            @if (chatService.isLoading()) {
              <div class="flex justify-start">
                <div class="bg-white border border-charcoal/5 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div class="flex gap-1 items-center h-4">
                    <span class="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0ms]"></span>
                    <span class="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span class="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:300ms]"></span>
                  </div>
                </div>
              </div>
            }

            <!-- Ancla para scroll automático -->
            <div #messagesEnd></div>
          </div>

          <!-- Input de mensaje -->
          <div class="p-4 border-t border-charcoal/5 bg-white flex-shrink-0">
            <div class="flex gap-2 items-center">
              <input
                type="text"
                [value]="inputText()"
                (input)="onInput($event)"
                (keydown.enter)="sendMessage()"
                [disabled]="chatService.isLoading()"
                placeholder="Escribe tu mensaje..."
                class="flex-1 bg-gray-50 border border-charcoal/10 rounded-full px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/30 outline-none focus:border-accent focus:bg-white transition-all disabled:opacity-50"
              />
              <button
                (click)="sendMessage()"
                [disabled]="chatService.isLoading() || inputText().trim() === ''"
                class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Enviar mensaje"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      }

      <!-- Botón flotante de toggle -->
      <button
        (click)="isOpen.set(!isOpen())"
        class="w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/35 flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
        [attr.aria-label]="isOpen() ? 'Cerrar chat' : 'Abrir chat'"
      >
        @if (isOpen()) {
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        }
      </button>

    </div>
  `,
})
export class ChatbotComponent {
  protected readonly chatService = inject(ChatService);
  protected readonly isOpen = signal(false);
  protected readonly inputText = signal('');

  private readonly messagesEnd = viewChild<ElementRef<HTMLDivElement>>('messagesEnd');

  constructor() {
    // Scroll automático al fondo cuando llegan mensajes nuevos o cambia el estado de carga
    effect(() => {
      this.chatService.history();
      this.chatService.isLoading();
      // Esperar al siguiente ciclo para que Angular actualice el DOM
      setTimeout(() => {
        this.messagesEnd()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    });
  }

  protected onInput(event: Event): void {
    this.inputText.set((event.target as HTMLInputElement).value);
  }

  protected sendMessage(): void {
    const text = this.inputText().trim();
    if (!text || this.chatService.isLoading()) return;
    this.inputText.set('');
    this.chatService.sendMessage(text);
  }
}
