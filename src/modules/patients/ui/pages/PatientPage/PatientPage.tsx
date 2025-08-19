import type { Patient } from '@/modules/patients/domain';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { usePatientsStore } from '../../store/patientsStore';
import { PatientInfoSection, SymptomsTable } from '../../components';
import NotFound from '@/modules/shared/components/NotFound/NotFound';

export function PatientPage() {
	const params = useParams<{ id: string }>();
	const [patient, setPatien] = useState<Patient | null>(null);
	const getPatientById = usePatientsStore((state) => state.getPatientById);

	useEffect(() => {
		if (!params.id) {
			setPatien(null);
			return;
		}
		getPatien(params.id);
	}, [params]);

	const getPatien = async (id: string) => {
		const patientFound = await getPatientById(id);
		setPatien(patientFound);
	};

	return (
		<div>
			{patient ? (
				<section className='flex flex-col gap-8'>
					<PatientInfoSection patient={patient} />
					<SymptomsTable symptoms={patient.symptoms} />
				</section>
			) : (
				<NotFound message='No se encontró el paciente' />
			)}
		</div>
	);
}
