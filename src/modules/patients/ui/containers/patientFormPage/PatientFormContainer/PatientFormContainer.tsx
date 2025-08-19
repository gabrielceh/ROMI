import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { usePatientsStore } from '../../../store/patientsStore';
import type { Patient } from '@/modules/patients/domain';
import { PatientFom } from '../../../components';

export function PatientFormContainer() {
	const [id, setId] = useState<string | null>(null);
	const [searchQuery] = useSearchParams();
	const [patient, setPatient] = useState<Patient | null>(null);
	const getPatientById = usePatientsStore((state) => state.getPatientById);

	useEffect(() => {
		setId(searchQuery.get('id'));
	}, [searchQuery]);

	useEffect(() => {
		if (id) {
			getPatient(id);
		}
	}, [id]);

	const getPatient = async (patient: string) => {
		const patientFound = await getPatientById(patient);
		console.log({ patientFound });

		setPatient(patientFound);
	};

	return id ? (
		<div className='flex flex-col gap-4'>
			<h2>{patient ? 'Ficha del paciente' : 'Agregar nuevo paciente'}</h2>

			<PatientFom patient={patient} id={id || ''} />
		</div>
	) : null;
}
