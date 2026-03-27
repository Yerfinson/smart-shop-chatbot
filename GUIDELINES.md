# Guidelines

## Reglas generales
- TypeScript estricto en todo el proyecto, cero uso de `any`
- Nombres en inglés para variables, funciones y archivos
- Comentarios en español solo para lógica compleja
- No instalar librerías nuevas sin consultar primero

## Frontend Angular
- Usar SIEMPRE standalone components, nunca NgModules
- Estado con signals: signal(), computed(), effect()
- Inyección con inject(), nunca en constructor
- ChangeDetectionStrategy.OnPush obligatorio en cada componente
- Separar lógica en services, los componentes solo manejan UI

## Backend Node
- Siempre manejar errores con try/catch
- Nunca exponer API keys en el código
- Usar variables de entorno para toda configuración sensible
- Respuestas de error con estructura: { error: string, status: number }

## Gemini API
- El system prompt debe incluir siempre el contexto de la tienda
- Limitar historial a últimos 10 mensajes para no exceder tokens
- Manejar errores de API con mensaje amigable al usuario

## Lo que la IA NO debe hacer
- No suponer el diseño visual, siempre preguntar si no está claro
- No cambiar la estructura de carpetas definida en ARCHITECTURE.md
- No usar NgModules bajo ninguna circunstancia
- No hardcodear datos que deberían venir de variables de entorno
- No instalar dependencias adicionales sin aprobación