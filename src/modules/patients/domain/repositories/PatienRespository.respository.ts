import type { Patient } from '../model';

export interface PatientRespository {
	getAllPatients(): Promise<Array<Patient>>;
	getPatientById(id: string): Promise<Patient | null>;
	addPatient(patient: Patient): Promise<void>;
	updatePatient(patient: Patient): Promise<void>;
}
