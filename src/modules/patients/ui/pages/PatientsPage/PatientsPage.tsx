import { useEffect } from 'react';
import { usePatientsStore } from '../../store/patientsStore';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router';
import { PageTitle } from '@/modules/shared/components';

export function PatientsPage() {
	const getAllPatients = usePatientsStore((state) => state.getAllPatients);
	const patients = usePatientsStore((state) => state.patients);

	useEffect(() => {
		getAllPatients();
	}, []);

	return (
		<div className='flex flex-col gap-8'>
			<PageTitle title='Listado de pacientes' />

			<section className='w-full max-w-4xl min-w-[350px] mx-auto'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Documento</TableHead>
							<TableHead>Nombre</TableHead>
							<TableHead className='text-center'>Acción</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{patients.map((patient) => (
							<TableRow key={patient.id}>
								<TableCell>{patient.id}</TableCell>
								<TableCell>{patient.name}</TableCell>
								<TableCell className='text-center'>
									<Link to={`/patient/${patient.id}`}>Ver</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</section>
		</div>
	);
}
