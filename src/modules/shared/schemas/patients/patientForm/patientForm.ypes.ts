import { z } from 'zod';
import type { patientForm } from './patientForm.schema';

export type PatientFormData = z.infer<typeof patientForm>;
