import type { Patient, PatientDataSource, Symptom } from '@patients/domain';

export class PatientLocalDataSourceImpl implements PatientDataSource {
	private patients: Array<Patient>;

	constructor() {
		this.patients = JSON.parse(localStorage.getItem('patients') || '[]');
	}

	async addPatient(patient: Patient): Promise<void> {
		const patientFound = this.patients.find((item) => item.id === patient.id);
		if (patientFound) return;

		this.patients.push(patient);
		localStorage.setItem('patients', JSON.stringify(this.patients));
	}

	async updatePatient(id: string, newSymptom: Symptom): Promise<void> {
		const patientFound = this.patients.find((item) => item.id === id);
		if (!patientFound) return;

		const index = this.patients.indexOf(patientFound);
		this.patients[index].symptoms = [...this.patients[index].symptoms, newSymptom];

		localStorage.setItem('patients', JSON.stringify(this.patients));
	}

	async getPatientById(id: string): Promise<Patient | null> {
		const patientFound = this.patients.find((patient) => patient.id === id);
		if (!patientFound) return null;
		return patientFound;
	}

	async getAllPatients(): Promise<Array<Patient>> {
		return this.patients;
	}
}
