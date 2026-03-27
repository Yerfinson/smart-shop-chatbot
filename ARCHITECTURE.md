# Architecture

## Estructura del proyecto
```
smart-shop-chatbot/
├── frontend/                    # Angular 18
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── hero/
│   │   │   │   ├── products/
│   │   │   │   ├── about/
│   │   │   │   ├── contact/
│   │   │   │   └── chatbot/
│   │   │   ├── services/
│   │   │   │   └── chat.service.ts
│   │   │   └── app.component.ts
│   │   └── environments/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   └── chat.route.ts
│   │   ├── controllers/
│   │   │   └── chat.controller.ts
│   │   ├── services/
│   │   │   └── gemini.service.ts
│   │   └── index.ts
│   └── .env
└── README.md
```

## Frontend
- Angular 18 con standalone components obligatorio
- Signals para estado reactivo, no Subjects ni BehaviorSubjects
- inject() para inyección de dependencias, no constructor DI
- ChangeDetectionStrategy.OnPush en todos los componentes
- HttpClient para comunicación con backend
- TailwindCSS para estilos

## Backend
- Node.js + Express + TypeScript
- Arquitectura en capas: routes → controllers → services
- Variables de entorno en .env, nunca hardcodeadas
- Manejo de errores con try/catch en todos los endpoints

## Comunicación Frontend ↔ Backend
- Frontend llama a POST http://localhost:3000/chat
- Body: { message: string, history: Message[] }
- Response: { reply: string }

## Gemini API
- Modelo: gemini-2.0-flash
- El sistema prompt define la personalidad y contexto de la tienda
- Se envía historial de conversación para mantener contexto

## Datos y configuración

### Tienda demo
- Nombre: StyleShop
- Tipo: Tienda de ropa genérica
- Productos: Mock data hardcodeada en frontend (array de objetos en products.component.ts)

### System prompt del chatbot
```
Eres el asistente virtual de StyleShop, una tienda de ropa online.
Ayudas a los clientes con información sobre productos, tallas, precios, 
métodos de pago y estado de pedidos. 
Responde siempre en el mismo idioma que el cliente.
Sé amable, conciso y útil. Si no sabes algo, dilo honestamente.
Productos disponibles: {products_context}
```

### Variables de entorno — backend (.env.example)
```
GEMINI_API_KEY=
PORT=
FRONTEND_URL=
```

### Variables de entorno — frontend (environment.ts)
```
apiUrl: 'http://localhost:PORT'
```

### Puerto
- Viene de variable de entorno PORT en backend
- Frontend lo lee desde environment.ts, nunca hardcodeado

## Gemini API — construcción del system prompt

El backend tiene su propio mock de productos en:
backend/src/data/products.mock.ts

Al recibir un request en POST /chat, el servicio de Gemini:
1. Lee el array de productos del mock
2. Lo serializa como string legible
3. Lo inyecta en {products_context} del system prompt

El body del request se mantiene limpio:
{ message: string, history: Message[] }

El frontend nunca manda contexto de productos, eso es responsabilidad del backend.