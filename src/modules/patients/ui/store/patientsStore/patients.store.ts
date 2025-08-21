import { create } from 'zustand';
import type { PatientsState } from './patients.state';
import type { PatientsActions } from './patients.actions';
import type { Patient } from '@patients/domain';
import { patientRepository } from './patientRespository';
import dayjs from '@core/dayjs/dayjs';

export const usePatientsStore = create<PatientsState & PatientsActions>()((set, get) => ({
	patients: [],

	addPatient: async (patient: Patient) => {
		try {
			await patientRepository.addPatient(patient);
			set({ patients: [...get().patients, patient] });
		} catch {
			throw new Error('Error al agregar paciente');
		}
	},

	updatePatient: async (id, description) => {
		try {
			const symptom = { id: crypto.randomUUID(), description: description, date: dayjs().format('YYYY-MM-DDTHH:mm:ss') };
			await patientRepository.updatePatient(id, symptom);
			set({
				patients: get().patients.map((p) => (p.id === id ? { ...p, symptoms: [...p.symptoms, symptom] } : p)),
			});
		} catch {
			throw new Error('Error al actualizar paciente');
		}
	},

	getPatientById: async (id: string) => {
		try {
			return await patientRepository.getPatientById(id);
		} catch {
			throw new Error('Error al obtener paciente');
		}
	},

	getAllPatients: async () => {
		try {
			const patiens = await patientRepository.getAllPatients();
			set({ patients: patiens });
			return patiens;
		} catch {
			set({ patients: [] });
			throw new Error('Error al obtener pacientes');
		}
	},
}));
