import { z } from 'zod';

export const patientForm = z.object({
	name: z.string().min(6, 'El nombre debe tener al menos 6 caracteres'),
	age: z.number('Solo se aceptan números').min(0, 'La edad debe ser mayor o igual a 0'),
	symptoms: z.string().min(3, 'Sintomas deben tener al menos 3 caracteres'),
});
