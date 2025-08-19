import type { Patient } from '@/modules/patients/domain';
import { PageTitle } from '@/modules/shared/components';

interface Props {
	patient: Patient;
}

export function PatientInfoSection({ patient }: Props) {
	return (
		<article className='flex flex-col gap-4'>
			<PageTitle title={patient.name} />
			<div className='grid grid-cols-2 gap-4'>
				<p>Documento: {patient.id}</p>
				<p>Edad: {patient.age}</p>
			</div>
		</article>
	);
}
