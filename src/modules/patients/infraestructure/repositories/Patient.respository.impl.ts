import type { Patient, PatientDataSource, PatientRespository, Symptom } from '../../domain';

export class PatientRespositoryImpl implements PatientRespository {
	private patientLocalDataSource: PatientDataSource;

	constructor(patientLocalDataSource: PatientDataSource) {
		this.patientLocalDataSource = patientLocalDataSource;
	}

	async addPatient(patient: Patient): Promise<void> {
		await this.patientLocalDataSource.addPatient(patient);
	}
	async updatePatient(id: string, newSymptom: Symptom): Promise<void> {
		await this.patientLocalDataSource.updatePatient(id, newSymptom);
	}

	async getPatientById(id: string): Promise<Patient | null> {
		return this.patientLocalDataSource.getPatientById(id);
	}

	async getAllPatients(): Promise<Array<Patient>> {
		return this.patientLocalDataSource.getAllPatients();
	}
}
