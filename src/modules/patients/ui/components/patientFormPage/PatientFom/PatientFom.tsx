import { useEffect, useState } from 'react';
import { patientForm, type PatientFormData } from '@/modules/shared/schemas/patients';
import { useForm } from 'react-hook-form';
import { usePatientsStore } from '@patients/ui/store/patientsStore';
import { useSearchParams } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import styles from './patient-form.module.css';
import type { Patient } from '@/modules/patients/domain';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CustomLabel, ErrorFormMessage } from '@/modules/shared/components';
import { toast } from 'sonner';

interface Props {
	patient: Patient | null;
	id: string;
}

export function PatientFom({ patient, id }: Props) {
	const updatePatient = usePatientsStore((state) => state.updatePatient);
	const addPatient = usePatientsStore((state) => state.addPatient);
	const [loading, setLoading] = useState(false);
	const [, setSearchParams] = useSearchParams();

	const patienUseForm = useForm<PatientFormData>({
		resolver: zodResolver(patientForm),
		defaultValues: {
			name: patient?.name,
			age: patient?.age,
			symptoms: '',
		},
	});

	useEffect(() => {
		patienUseForm.reset({
			age: patient?.age,
			name: patient?.name,
			symptoms: '',
		});
	}, [patient]);

	const onSubmit = async (data: PatientFormData) => {
		if (!patient) {
			try {
				setLoading(true);
				const newPatient = {
					id,
					name: data.name,
					age: data.age,
					symptoms: [
						{
							id: crypto.randomUUID(),
							date: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
							description: data.symptoms,
						},
					],
				};
				await addPatient(newPatient);
				toast.success('Patiento agregado exitosamente');
			} catch {
				toast.error('Error al agregar paciente');
			} finally {
				setLoading(false);
				setSearchParams({ id: '' });
			}
			return;
		}

		try {
			setLoading(true);
			await updatePatient(id, data.symptoms);
			toast.success('Patiento actualizado exitosamente');
		} catch {
			toast.error('Error al actualizar paciente');
		} finally {
			setLoading(false);
			setSearchParams({ id: '' });
		}
	};

	return (
		<form className={styles.form} onSubmit={patienUseForm.handleSubmit(onSubmit)}>
			<section className={styles.formSection}>
				<article className={styles.formSectionTop}>
					<div className={styles.inputContainer}>
						<CustomLabel htmlFor='name'>Nombre</CustomLabel>
						<Input
							id='name'
							type='text'
							placeholder='Nombre'
							{...patienUseForm.register('name', { required: true })}
							aria-label='Nombre del paciente'
						/>
						{patienUseForm.formState.errors.name && <ErrorFormMessage message={patienUseForm.formState.errors.name.message} />}
					</div>

					<div className={styles.inputContainer}>
						<CustomLabel htmlFor='age'>Edad</CustomLabel>
						<Input
							id='age'
							type='number'
							placeholder='Edad'
							{...patienUseForm.register('age', { required: true, valueAsNumber: true })}
							aria-label='Edad del paciente'
						/>
						{patienUseForm.formState.errors.age && <ErrorFormMessage message={patienUseForm.formState.errors.age.message} />}
					</div>
				</article>

				<div className={styles.inputContainer}>
					<CustomLabel htmlFor='symptoms'>Síntomas</CustomLabel>
					<Textarea
						id='symptoms'
						placeholder='Sintomas'
						{...patienUseForm.register('symptoms', { required: true })}
						aria-label='Sintomas del paciente'></Textarea>
					{patienUseForm.formState.errors.symptoms && <ErrorFormMessage message={patienUseForm.formState.errors.symptoms.message} />}
				</div>
			</section>

			<section className={styles.buttonContainer}>
				<Button type='submit' className={styles.button} disabled={loading}>
					{loading ? 'Guardando...' : 'Guardar'}
				</Button>
			</section>
		</form>
	);
}
