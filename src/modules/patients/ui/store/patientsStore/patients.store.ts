import { create } from 'zustand';
import type { PatientsState } from './patients.state';
import type { PatientsActions } from './patients.actions';
import type { Patient } from '@patients/domain';
import { patientRepository } from './patientRespository';

export const usePatientsStore = create<PatientsState & PatientsActions>()((set, get) => ({
	patients: [],

	addPatient: async (patient: Patient) => {
		await patientRepository.addPatient(patient);
		set({ patients: [...get().patients, patient] });
	},

	updatePatient: async (patient: Patient) => {
		await patientRepository.updatePatient(patient);
		set({
			patients: get().patients.map((p) => (p.id === patient.id ? patient : p)),
		});
	},

	getPatientById: async (id: string) => {
		return await patientRepository.getPatientById(id);
	},

	getAllPatients: async () => {
		return await patientRepository.getAllPatients();
	},

	setPatients: async () => {
		patientRepository.getAllPatients().then((patients) => {
			set({ patients });
		});
	},
}));
