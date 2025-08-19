import styles from './patient-form-page.module.css';

import PatientDocumentForm from '../../components/patientFormPage/PatientDocumentForm/PatientDocumentForm';
import { useNavigate } from 'react-router';
import { PatientFormContainer } from '../../containers';
import { PageTitle } from '@/modules/shared/components';

export function PatientFormPage() {
	const navigate = useNavigate();

	const onSubmit = (document: string) => {
		navigate(`?id=${document}`);
	};

	return (
		<div className={styles.container}>
			<PageTitle title='Ingreso de paciente' />
			<p>Digite el documento del paciente para su ingreso</p>
			<PatientDocumentForm onSubmit={onSubmit} />
			<PatientFormContainer />
		</div>
	);
}
