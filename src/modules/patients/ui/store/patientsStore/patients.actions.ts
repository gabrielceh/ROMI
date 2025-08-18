import type { Patient } from '@patients/domain';

export interface PatientsActions {
	addPatient: (patient: Patient) => void;
	updatePatient: (patient: Patient) => void;
	getPatientById: (id: string) => void;
	getAllPatients: () => void;

	setPatients: () => void;
}
