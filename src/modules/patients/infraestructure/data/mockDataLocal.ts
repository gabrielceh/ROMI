import type { Patient } from '@patients/domain';

export class MockPatientLocalDataSource {
	private static _mockPatients: Patient[] = [
		{
			id: '1002636981',
			name: 'Juan Pérez',
			age: 30,
			symptoms: [
				{ id: 's1', description: 'Dolor de cabeza', date: new Date('2025-08-01') },
				{ id: 's2', description: 'Fiebre leve', date: new Date('2025-08-02') },
			],
		},
		{
			id: '10258284',
			name: 'María García',
			age: 45,
			symptoms: [{ id: 's3', description: 'Dolor abdominal', date: new Date('2025-08-10') }],
		},
		{
			id: '1234567890',
			name: 'Carlos López',
			age: 27,
			symptoms: [
				{ id: 's4', description: 'Tos persistente', date: new Date('2025-07-28') },
				{ id: 's5', description: 'Dolor de garganta', date: new Date('2025-07-29') },
				{ id: 's6', description: 'Fatiga', date: new Date('2025-08-05') },
			],
		},
		{
			id: '1007234435',
			name: 'Ana Torres',
			age: 52,
			symptoms: [
				{ id: 's7', description: 'Dolor en las articulaciones', date: new Date('2025-08-15') },
				{ id: 's8', description: 'Insomnio', date: new Date('2025-08-16') },
			],
		},
		{
			id: '1053813243',
			name: 'Luis Martínez',
			age: 36,
			symptoms: [
				{ id: 's9', description: 'Pérdida de apetito', date: new Date('2025-08-03') },
				{ id: 's10', description: 'Náuseas', date: new Date('2025-08-04') },
			],
		},
	];

	static initLocalStorage() {
		localStorage.setItem('patients', JSON.stringify(this._mockPatients));
	}
}
