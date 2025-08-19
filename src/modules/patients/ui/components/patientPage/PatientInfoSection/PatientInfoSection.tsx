import type { Patient } from '@/modules/patients/domain';

interface Props {
	patient: Patient;
}

export function PatientInfoSection({ patient }: Props) {
	return (
		<article className='flex flex-col gap-4'>
			<h1 className='text-2xl'>{patient.name}</h1>
			<div className='grid grid-cols-2 gap-4'>
				<p>Documento: {patient.id}</p>
				<p>Edad: {patient.age}</p>
			</div>
		</article>
	);
}
