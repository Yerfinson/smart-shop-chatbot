import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const FRIENDLY_ERROR = 'Lo siento, no pude procesar tu mensaje. Por favor intenta de nuevo.';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/chat`;

  readonly history = signal<ChatMessage[]>([]);
  readonly isLoading = signal(false);

  sendMessage(userMessage: string): void {
    if (this.isLoading()) return;

    // Snapshot del historial antes de agregar el nuevo mensaje
    const historySnapshot = this.history();

    this.history.update((h) => [...h, { role: 'user', text: userMessage }]);
    this.isLoading.set(true);

    this.http
      .post<{ reply: string }>(this.apiUrl, {
        message: userMessage,
        history: historySnapshot,
      })
      .pipe(
        catchError(() => of({ reply: FRIENDLY_ERROR }))
      )
      .subscribe((response) => {
        this.history.update((h) => [...h, { role: 'model', text: response.reply }]);
        this.isLoading.set(false);
      });
  }
}
