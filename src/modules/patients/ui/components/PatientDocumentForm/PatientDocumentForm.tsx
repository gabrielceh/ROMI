import styles from './patient-document-form.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { documentSchema, type DocumentFormData } from '@/modules/shared/schemas/patients';
import { ErrorFormMessage } from '@/modules/shared/components';

interface Props {
	onSubmit: (document: string) => void;
}

export default function PatientDocumentForm({ onSubmit }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DocumentFormData>({
		resolver: zodResolver(documentSchema),
	});

	const handleSubmitForm = (data: DocumentFormData) => {
		onSubmit(data.id);
	};

	return (
		<form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
			<div className={styles.inputContainer}>
				<Input type='text' placeholder='Documento' {...register('id', { required: true })} aria-label='Documento' />
				{errors.id && <ErrorFormMessage message={errors.id.message} />}
			</div>
			<Button type='submit'>Consultar</Button>
		</form>
	);
}
