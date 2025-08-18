import { z } from 'zod';
import { documentSchema } from './document.schema';

export type DocumentFormData = z.infer<typeof documentSchema>;
