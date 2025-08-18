import { z } from 'zod';

export const documentSchema = z.object({
	id: z.string().min(6, 'El ID debe tener al menos 6 caracteres').regex(/^\d+$/, 'Solo se permiten números'),
});
