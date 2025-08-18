import { AppRouter } from '@core/router/AppRouter';
import { useEffect } from 'react';
import { MockPatientLocalDataSource } from '@patients/infraestructure/data/mockDataLocal';
import { Toaster } from '@/components/ui/sonner';

function App() {
	useEffect(() => {
		const patients = localStorage.getItem('patients');
		if (!patients) {
			MockPatientLocalDataSource.initLocalStorage();
		}
	}, []);

	return (
		<>
			<AppRouter />
			<Toaster position='top-right' />
		</>
	);
}

export default App;
