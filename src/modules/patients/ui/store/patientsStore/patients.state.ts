import type { Patient } from '@/modules/patients/domain';

export interface PatientsState {
	patients: Array<Patient>;
}
