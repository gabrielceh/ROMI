import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Symptom } from '@/modules/patients/domain';
import dayjs from '@core/dayjs/dayjs';

interface Props {
	symptoms: Array<Symptom>;
}

export function SymptomsTable({ symptoms }: Props) {
	return (
		<article className='flex flex-col gap-4'>
			<h2 className='text-xl'>Historial del paciente</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Fecha de ingreso</TableHead>
						<TableHead>Hora</TableHead>
						<TableHead>Descripción</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{symptoms.map((symptom) => (
						<TableRow key={symptom.id}>
							<TableCell>{dayjs(symptom.date).format('DD - MMMM - YYYY')}</TableCell>
							<TableCell>{dayjs(symptom.date).format('HH:mm')}</TableCell>
							<TableCell>{symptom.description}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</article>
	);
}
