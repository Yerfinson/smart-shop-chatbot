import { Request, Response } from 'express';
import { generateReply } from '../services/gemini.service';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export async function handleChat(req: Request, res: Response): Promise<void> {
  try {
    const message: unknown = req.body?.message;
    const history: unknown = req.body?.history;

    if (typeof message !== 'string' || message.trim() === '') {
      res.status(400).json({ error: 'El campo "message" es requerido y debe ser texto', status: 400 });
      return;
    }

    if (!Array.isArray(history)) {
      res.status(400).json({ error: 'El campo "history" debe ser un array', status: 400 });
      return;
    }

    const reply = await generateReply(message.trim(), history as ChatMessage[]);
    res.json({ reply });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Error interno del servidor';
    res.status(500).json({ error: errorMessage, status: 500 });
  }
}
