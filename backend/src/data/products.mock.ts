export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  sizes: string[];
  colors: string[];
  description: string;
  inStock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Camiseta Básica',
    category: 'Tops',
    price: 19.99,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blanco', 'Negro', 'Gris', 'Azul marino'],
    description: 'Camiseta de algodón 100%, corte regular, perfecta para el día a día.',
    inStock: true,
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
  },
];
