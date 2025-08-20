import type { Patient, Symptom } from '../model';

export interface PatientRespository {
	getAllPatients(): Promise<Array<Patient>>;
	getPatientById(id: string): Promise<Patient | null>;
	addPatient(patient: Patient): Promise<void>;
	updatePatient(id: string, newSymptom: Symptom): Promise<void>;
}
