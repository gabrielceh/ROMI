import { AppRouter } from '@core/router/AppRouter';
import { useEffect } from 'react';
import { MockPatientLocalDataSource } from '@patients/infraestructure/data/mockDataLocal';

function App() {
	useEffect(() => {
		const patients = localStorage.getItem('patients');
		if (!patients) {
			MockPatientLocalDataSource.initLocalStorage();
		}
	}, []);

	return <AppRouter />;
}

export default App;
