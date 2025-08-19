import { MainLayout } from '@/modules/shared/layouts';
import { PatientFormPage, PatientsPage } from '@patients/ui';
import { Route, Routes } from 'react-router';

export function AppRouter() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index element={<PatientFormPage />} />
				<Route path='patients' element={<PatientsPage />} />
				<Route path='patient/:id' element={<h1>Paciente</h1>} />
			</Route>
		</Routes>
	);
}
