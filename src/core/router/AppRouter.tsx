import Loader from '@/modules/shared/components/Loader/Loader';
import { MainLayout } from '@/modules/shared/layouts';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

const PatientFormPage = lazy(() => import('@patients/ui/pages').then((module) => ({ default: module.PatientFormPage })));
const PatientsPage = lazy(() => import('@patients/ui/pages').then((module) => ({ default: module.PatientsPage })));
const PatientPage = lazy(() => import('@patients/ui/pages').then((module) => ({ default: module.PatientPage })));

export function AppRouter() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<PatientFormPage />} />
					<Route path='patients' element={<PatientsPage />} />
					<Route path='patient/:id' element={<PatientPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
}
