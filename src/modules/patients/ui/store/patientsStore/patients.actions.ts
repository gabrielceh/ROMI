import type { Patient } from '@patients/domain';

export interface PatientsActions {
	addPatient: (patient: Patient) => Promise<void>;
	updatePatient: (id: string, description: string) => Promise<void>;
	getPatientById: (id: string) => Promise<Patient | null>;
	getAllPatients: () => Promise<Array<Patient>>;

	setPatients: () => void;
}
