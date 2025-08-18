import { PatientPage } from '@patients/ui';
import { Route, Routes } from 'react-router';

export function AppRouter() {
	return (
		<Routes>
			<Route index element={<PatientPage />} />
		</Routes>
	);
}
