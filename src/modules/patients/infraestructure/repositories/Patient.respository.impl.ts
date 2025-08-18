import type { Patient, PatientLocalDataSource, PatientRespository } from '../../domain';

export class PatientRespositoryImpl implements PatientRespository {
	private patientLocalDataSource: PatientLocalDataSource;

	constructor(patientLocalDataSource: PatientLocalDataSource) {
		this.patientLocalDataSource = patientLocalDataSource;
	}

	async addPatient(patient: Patient): Promise<void> {
		await this.patientLocalDataSource.addPatient(patient);
	}
	async updatePatient(patient: Patient): Promise<void> {
		await this.patientLocalDataSource.updatePatient(patient);
	}

	async getPatientById(id: string): Promise<Patient | null> {
		return this.patientLocalDataSource.getPatientById(id);
	}

	async getAllPatients(): Promise<Array<Patient>> {
		return this.patientLocalDataSource.getAllPatients();
	}
}
