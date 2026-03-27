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