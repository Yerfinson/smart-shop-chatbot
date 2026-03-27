import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    ChatbotComponent,
  ],
  template: `
    <app-hero />
    <app-products />
    <app-about />
    <app-contact />
    <app-chatbot />
  `,
})
export class AppComponent {}
