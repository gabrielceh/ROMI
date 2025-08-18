import { MainLayout } from '@/modules/shared/layouts';
import { PatientPage } from '@patients/ui';
import { Route, Routes } from 'react-router';

export function AppRouter() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index element={<PatientPage />} />
			</Route>
		</Routes>
	);
}
