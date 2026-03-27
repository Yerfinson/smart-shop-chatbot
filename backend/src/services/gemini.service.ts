import { mockProducts, Product } from '../data/products.mock';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

const MAX_HISTORY_LENGTH = 10;
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'nvidia/nemotron-3-super-120b-a12b:free';

const SYSTEM_PROMPT_TEMPLATE = `Eres el asistente virtual de StyleShop, una tienda de ropa online.
Ayudas a los clientes con información sobre productos, tallas, precios,
métodos de pago y estado de pedidos.
Responde siempre en el mismo idioma que el cliente.
Sé amable, conciso y útil. Si no sabes algo, dilo honestamente.
Productos disponibles:
{products_context}`;

function buildProductsContext(products: Product[]): string {
  return products
    .map(
      (p) =>
        `- ${p.name} (${p.category}): $${p.price} | Tallas: ${p.sizes.join(', ')} | Colores: ${p.colors.join(', ')} | ${p.inStock ? 'En stock' : 'Sin stock'} | ${p.description}`
    )
    .join('\n');
}

function buildSystemPrompt(): string {
  const productsContext = buildProductsContext(mockProducts);
  return SYSTEM_PROMPT_TEMPLATE.replace('{products_context}', productsContext);
}

export async function generateReply(
  message: string,
  history: ChatMessage[]
): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error('La API key de OpenRouter no está configurada en el servidor');
  }

  const limitedHistory = history.slice(-MAX_HISTORY_LENGTH);

  const messages: OpenRouterMessage[] = [
    { role: 'system', content: buildSystemPrompt() },
    ...limitedHistory.map((msg) => ({
      role: msg.role === 'model' ? ('assistant' as const) : ('user' as const),
      content: msg.text,
    })),
    { role: 'user', content: message },
  ];

  const response = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model: MODEL, messages }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter error ${response.status}: ${errorText}`);
  }

  const data = (await response.json()) as OpenRouterResponse;
  const content = data.choices[0]?.message?.content;

  if (!content) {
    throw new Error('Respuesta vacía del modelo');
  }

  return content;
}
