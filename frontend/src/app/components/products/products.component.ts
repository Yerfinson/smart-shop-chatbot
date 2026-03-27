import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  sizes: string[];
  colors: string[];
  description: string;
  inStock: boolean;
  isNew: boolean;
}

// Colores de placeholder para las tarjetas (ciclan por índice)
const CARD_COLORS = [
  'bg-primary-light',
  'bg-accent-light',
  'bg-stone',
  'bg-primary-light',
  'bg-accent-light',
  'bg-stone',
];

@Component({
  selector: 'app-products',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="productos" class="py-24 bg-white">
      <div class="container mx-auto px-6">

        <!-- Header -->
        <div class="text-center mb-16">
          <span class="inline-block text-primary font-semibold text-sm uppercase tracking-widest bg-primary-light px-4 py-2 rounded-full mb-4">
            Colección
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Nuestra Colección
          </h2>
          <p class="text-charcoal/50 text-lg max-w-md mx-auto">
            Ropa de calidad para cada ocasión y estilo
          </p>
        </div>

        <!-- Grid de productos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (product of products(); track product.id; let i = $index) {
            <article class="bg-white rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

              <!-- Imagen placeholder -->
              <div [class]="cardColors[i % cardColors.length] + ' relative h-52 flex items-center justify-center'">
                <span class="text-5xl font-black text-charcoal/10 select-none">
                  {{ product.name[0] }}
                </span>
                <!-- Badges -->
                <div class="absolute top-3 left-3 flex gap-2">
                  @if (product.isNew) {
                    <span class="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      Nuevo
                    </span>
                  }
                  @if (!product.inStock) {
                    <span class="bg-charcoal/60 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Agotado
                    </span>
                  }
                </div>
              </div>

              <!-- Info -->
              <div class="p-6">
                <span class="text-xs font-semibold text-accent uppercase tracking-wider">
                  {{ product.category }}
                </span>
                <h3 class="text-xl font-bold text-charcoal mt-1 mb-2">
                  {{ product.name }}
                </h3>
                <p class="text-charcoal/50 text-sm leading-relaxed line-clamp-2">
                  {{ product.description }}
                </p>

                <!-- Tallas disponibles -->
                <div class="flex flex-wrap gap-1 mt-4">
                  @for (size of product.sizes; track size) {
                    <span class="text-xs border border-charcoal/15 text-charcoal/60 px-2 py-1 rounded-md">
                      {{ size }}
                    </span>
                  }
                </div>

                <!-- Precio y acción -->
                <div class="flex items-center justify-between mt-5">
                  <span class="text-2xl font-bold text-primary">
                    {{ '$' + product.price.toFixed(2) }}
                  </span>
                  <button
                    [disabled]="!product.inStock"
                    class="bg-charcoal text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {{ product.inStock ? 'Agregar' : 'Sin stock' }}
                  </button>
                </div>
              </div>
            </article>
          }
        </div>

      </div>
    </section>
  `,
})
export class ProductsComponent {
  readonly cardColors = CARD_COLORS;

  readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Camiseta Básica',
      category: 'Tops',
      price: 19.99,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Blanco', 'Negro', 'Gris', 'Azul marino'],
      description: 'Camiseta de algodón 100%, corte regular, perfecta para el día a día.',
      inStock: true,
      isNew: true,
    },
    {
      id: 2,
      name: 'Jeans Slim Fit',
      category: 'Pantalones',
      price: 49.99,
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Azul clásico', 'Negro', 'Gris oscuro'],
      description: 'Jeans de corte slim con stretch para mayor comodidad.',
      inStock: true,
      isNew: true,
    },
    {
      id: 3,
      name: 'Vestido Floral',
      category: 'Vestidos',
      price: 39.99,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Rosa floral', 'Azul floral'],
      description: 'Vestido midi con estampado floral, ideal para primavera y verano.',
      inStock: true,
      isNew: false,
    },
    {
      id: 4,
      name: 'Sudadera con Capucha',
      category: 'Abrigos',
      price: 34.99,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Gris', 'Negro', 'Azul', 'Verde militar'],
      description: 'Sudadera con capucha de algodón con bolsillo canguro.',
      inStock: true,
      isNew: false,
    },
    {
      id: 5,
      name: 'Blazer Formal',
      category: 'Abrigos',
      price: 79.99,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Negro', 'Azul marino', 'Beige'],
      description: 'Blazer de corte moderno, perfecto para ocasiones formales y de trabajo.',
      inStock: false,
      isNew: false,
    },
    {
      id: 6,
      name: 'Falda Midi Plisada',
      category: 'Faldas',
      price: 29.99,
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Negro', 'Blanco', 'Rosa palo', 'Verde salvia'],
      description: 'Falda midi plisada de tela fluida, versátil y elegante.',
      inStock: true,
      isNew: true,
    },
  ]);
}
