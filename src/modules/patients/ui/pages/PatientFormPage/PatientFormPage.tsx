import styles from './patient-form-page.module.css';

import PatientDocumentForm from '../../components/patientFormPage/PatientDocumentForm/PatientDocumentForm';
import { useNavigate } from 'react-router';
import { PatientFormContainer } from '../../containers';

export function PatientFormPage() {
	const navigate = useNavigate();

	const onSubmit = (document: string) => {
		navigate(`?id=${document}`);
	};

	return (
		<div className={styles.container}>
			<h1>Formulario de ingreso</h1>
			<PatientDocumentForm onSubmit={onSubmit} />
			<PatientFormContainer />
		</div>
	);
}
